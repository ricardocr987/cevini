'use client'
import React, { useEffect, useRef } from 'react';

export const Video = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Attempt to play the video as soon as it's loaded
        const playVideo = async () => {
            try {
                if (videoRef.current) {
                    await videoRef.current.play();
                }
            } catch (error) {
                console.log("Autoplay failed:", error);
            }
        };

        playVideo();
    }, []);

    return (
        <div className="relative w-full h-full">
            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                loop
                preload="auto"
                className="w-full h-full object-cover"
                aria-label="Background video"
                aria-hidden="true"
                tabIndex={-1}
                poster="/media/poster.jpg"
            >
                <source src="/media/cevini.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};
