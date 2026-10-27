'use client';

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

// A control-free player. Browser download hints are deterrents, not DRM.
const TapVideo = forwardRef(function TapVideo({
  children, label = 'video', onPlay, onPause, onEnded, ...props
}, forwardedRef) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState('');
  useImperativeHandle(forwardedRef, () => videoRef.current);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    setError('');
    if (!video.paused) {
      video.pause();
      return;
    }
    try {
      if (video.ended) video.currentTime = 0;
      await video.play();
    } catch (error) {
      if (error.name !== 'AbortError') setError('Playback could not start. Tap the video to try again.');
    }
  }

  return (
    <>
      <video
        {...props}
        ref={videoRef}
        data-tap-video
        controls={false}
        controlsList="nodownload noremoteplayback nofullscreen"
        disablePictureInPicture
        disableRemotePlayback
        playsInline
        draggable={false}
        role="button"
        tabIndex={0}
        aria-label={`${playing ? 'Pause' : 'Play'} ${label}`}
        aria-pressed={playing}
        title={playing ? 'Click or tap to pause' : 'Click or tap to play'}
        onClick={togglePlayback}
        onKeyDown={event => {
          if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            togglePlayback();
          }
        }}
        onContextMenu={event => event.preventDefault()}
        onDragStart={event => event.preventDefault()}
        onPlay={event => { setPlaying(true); onPlay?.(event); }}
        onPause={event => { setPlaying(false); onPause?.(event); }}
        onEnded={event => { setPlaying(false); onEnded?.(event); }}
      >
        {children}
      </video>
      {error && <p role="alert">{error}</p>}
    </>
  );
});

export default TapVideo;
