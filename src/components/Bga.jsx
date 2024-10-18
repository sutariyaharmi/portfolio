import React from 'react';
import './Bg.css';

const generateRandomStars = (count) => {
    let stars = '';
    for (let i = 0; i < count; i++) {
        const x = Math.random() * 2000; 
        const y = Math.random() * 2000; 
        stars += `${x}px ${y}px #FFF, `;
    }
    return stars.slice(0, -2); 
};

const Bga = () => {
    const shadowsSmall = generateRandomStars(500);
    const shadowsMedium = generateRandomStars(150);
    const shadowsBig = generateRandomStars(100);

    return (
        <div className="starry-background">
            <div className="stars" style={{ boxShadow: shadowsSmall }} />
            <div className="stars2" style={{ boxShadow: shadowsSmall }} />
            <div className="stars3" style={{ boxShadow: shadowsMedium }} />
            <div className="star4" style={{ boxShadow: shadowsMedium }} />
            <div className="stars5" style={{ boxShadow: shadowsBig }} />
            <div className="stars6" style={{ boxShadow: shadowsBig }} />
        </div>
    );
};

export default Bga;
