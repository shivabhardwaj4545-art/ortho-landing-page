import React from 'react';

export default function CostTable({ costRows = [] }) {
  return (
    <section className="section section-alt" id="cost-table" aria-label="Transparent Treatment Cost Comparison">
      <div className="container">
        <div className="section-header">
          <h2>Transparent cost comparison</h2>
          <p>
            Compare indicative procedure expenses at accredited partner hospitals in India against private healthcare costs in the UK and USA.
          </p>
        </div>

        <div className="cost-table-container">
          <table className="cost-table">
            <thead>
              <tr>
                <th scope="col" style={{ width: '40%' }}>Procedure / Treatment</th>
                <th scope="col" style={{ width: '20%' }}>India (Accredited Centers)</th>
                <th scope="col" style={{ width: '20%' }}>UK Private Care [EDIT]</th>
                <th scope="col" style={{ width: '20%' }}>USA Private Care [EDIT]</th>
              </tr>
            </thead>
            <tbody>
              {costRows.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.procedure}</strong></td>
                  <td className="col-india">{row.india}</td>
                  <td>{row.uk}</td>
                  <td>{row.usa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="cost-note">
          Indicative estimates only. The final cost is confirmed after the treating doctor reviews your medical reports.
        </p>
      </div>
    </section>
  );
}

