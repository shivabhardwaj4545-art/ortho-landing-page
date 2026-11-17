<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$dataDir = __DIR__ . '/../data';
if (!file_exists($dataDir)) {
    @mkdir($dataDir, 0755, true);
}

$jsonFile = $dataDir . '/leads.json';
$csvFile = $dataDir . '/leads.csv';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rawInput = file_get_contents('php://input');
    $data = json_decode($rawInput, true);

    if (!$data) {
        $data = $_POST;
    }

    $leadId = 'LWE-' . round(microtime(true) * 1000) . '-' . rand(100, 999);
    $patientName = isset($data['patientName']) ? trim($data['patientName']) : 'Anonymous';
    $whatsapp = isset($data['whatsappNumber']) ? trim($data['whatsappNumber']) : '';
    $email = isset($data['email']) ? trim($data['email']) : '';
    $country = isset($data['country']) ? trim($data['country']) : (isset($data['cityCountry']) ? trim($data['cityCountry']) : 'International');
    $treatment = isset($data['treatmentRequired']) ? trim($data['treatmentRequired']) : 'General Consultation';
    $hospital = isset($data['preferredHospital']) ? trim($data['preferredHospital']) : 'Any Top Accredited Hospital';
    $source = isset($data['source']) ? trim($data['source']) : 'Hostinger Website';
    $message = isset($data['message']) ? trim($data['message']) : '';

    $record = [
        'id' => $leadId,
        'createdAt' => date('c'),
        'patientName' => $patientName,
        'whatsappNumber' => $whatsapp,
        'email' => $email,
        'country' => $country,
        'treatmentRequired' => $treatment,
        'preferredHospital' => $hospital,
        'source' => $source,
        'message' => $message
    ];

    // 1. Save to JSON DB
    $allLeads = [];
    if (file_exists($jsonFile)) {
        $allLeads = json_decode(file_get_contents($jsonFile), true) ?: [];
    }
    array_unshift($allLeads, $record);
    @file_put_contents($jsonFile, json_encode($allLeads, JSON_PRETTY_PRINT));

    // 2. Save to CSV
    if (!file_exists($csvFile)) {
        @file_put_contents($csvFile, "ID,Date,Patient Name,WhatsApp / Phone,Email,Country / City,Treatment Required,Preferred Hospital,Source,Message\n");
    }
    $csvRow = sprintf(
        "\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\"\n",
        $leadId,
        date('Y-m-d H:i:s'),
        str_replace('"', '""', $patientName),
        str_replace('"', '""', $whatsapp),
        str_replace('"', '""', $email),
        str_replace('"', '""', $country),
        str_replace('"', '""', $treatment),
        str_replace('"', '""', $hospital),
        str_replace('"', '""', $source),
        str_replace('"', '""', $message)
    );
    @file_put_contents($csvFile, $csvRow, FILE_APPEND);

    // 3. Send Email Notification to shiva77work@gmail.com
    $to = 'shiva77work@gmail.com';
    $subject = "🚨 [New Patient Lead] {$patientName} - {$treatment} ({$country})";
    $cleanPhone = preg_replace('/[^0-9]/', '', $whatsapp);
    $waLink = $cleanPhone ? "https://wa.me/{$cleanPhone}" : "";

    $emailBody = "New Patient Consultation Request:\n\n";
    $emailBody .= "Reference ID: {$leadId}\n";
    $emailBody .= "Patient Name: {$patientName}\n";
    $emailBody .= "WhatsApp Phone: {$whatsapp}\n";
    if ($waLink) $emailBody .= "WhatsApp Link: {$waLink}\n";
    $emailBody .= "Email: {$email}\n";
    $emailBody .= "Country: {$country}\n";
    $emailBody .= "Treatment: {$treatment}\n";
    $emailBody .= "Preferred Hospital: {$hospital}\n";
    $emailBody .= "Source: {$source}\n";
    if ($message) $emailBody .= "Notes: {$message}\n";

    $headers = "From: leads@lwepatientcare.in\r\n";
    $headers .= "Reply-To: " . ($email ?: 'shiva77work@gmail.com') . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    @mail($to, $subject, $emailBody, $headers);

    echo json_encode([
        'success' => true,
        'message' => 'Lead successfully saved and notified.',
        'leadId' => $leadId
    ]);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($jsonFile)) {
        echo file_get_contents($jsonFile);
    } else {
        echo json_encode([]);
    }
    exit();
}
