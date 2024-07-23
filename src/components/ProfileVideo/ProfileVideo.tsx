import React, { useEffect, useRef, useState } from 'react';
import styles from './ProfileVideo.module.css';

interface ProfileVideoProps {
  src: string;
}

function ProfileVideo({ src }: ProfileVideoProps) {
  const iFrameRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOverlayClick = () => {
    const iframe = iFrameRef.current;

    if (iframe) {
      iframe.classList.remove(styles.iframeInitial);
      iframe.classList.add(styles.iframePlaying);
      setIsPlaying(true);

      // Tente iniciar a reprodução do vídeo
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
    }
  };

  return (
    <div className="relative w-full h-[240px]">
      {!isPlaying && (
        <div
          className={styles.iframeOverlay}
          onClick={handleOverlayClick}
        ></div>
      )}
      <iframe
        ref={iFrameRef}
        className={`w-full h-full rounded-3xl ${styles.iframeInitial}`}
        src={`${src}?enablejsapi=1`}
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ProfileVideo;
