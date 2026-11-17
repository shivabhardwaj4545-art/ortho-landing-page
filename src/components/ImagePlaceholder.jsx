import React, { useState } from 'react';

/**
 * ImagePlaceholder
 * Renders a production image with a caption, responsive aspect-ratio container,
 * and graceful fallback to an architectural diagonal placeholder pattern if the image
 * is absent or cannot be loaded.
 */
export default function ImagePlaceholder({
  src,
  alt = '',
  aspectRatio = '16/9',
  caption = 'Image placeholder',
  height,
  priority = false
}) {
  const [hasError, setHasError] = useState(false);

  const containerStyle = {
    aspectRatio: aspectRatio,
    ...(height ? { height } : {})
  };

  // If a real image src is supplied and hasn't errored out, render the real photo
  if (src && !hasError) {
    return (
      <figure className="image-frame-box" style={containerStyle}>
        <img
          src={src}
          alt={alt || caption}
          className="image-frame-img"
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : undefined}
          decoding="async"
          onError={() => setHasError(true)}
        />
        {caption && (
          <figcaption className="image-placeholder-caption">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // Fallback: editorial bordered placeholder with diagonal pattern
  return (
    <div
      className="image-placeholder-box"
      style={containerStyle}
      role="img"
      aria-label={caption}
    >
      <span className="image-placeholder-caption">{caption}</span>
    </div>
  );
}
