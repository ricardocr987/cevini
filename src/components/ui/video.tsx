import React from 'react';

export const Video = () => {
    return (
        <div className="relative w-full h-full">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label="Background video"
            >
                <source 
                    src="/media/cevini.mp4" 
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};
