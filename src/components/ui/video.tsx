import React from 'react';

export const Video = () => {
    return (
        <video
            autoPlay
            muted
            loop
            className="absolute h-full w-full object-cover"
            style={{ zIndex: -1 }}
        >
            <source src="/media/bricks.mp4" type="video/mp4" />
        </video>
    );
};
