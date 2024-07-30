import React, { useState, useRef, useEffect } from 'react';

const LazyImageLoader = ({ src, alt, ...props }) => {
    const imageRef = useRef(null);
    const [Visible, setVisible] = useState(false);
   

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            });
        });

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <img
            ref={imageRef}
            src={Visible ? src : ''}
            alt={alt}
            {...props}
            style={{
                opacity: Visible ? 1 : 0,
                transition: 'opacity 0.6s ease-in-out',
            }}
        />
    );
};

export default LazyImageLoader;
