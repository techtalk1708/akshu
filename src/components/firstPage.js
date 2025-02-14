import React, { useState } from 'react';
import './firstPage.css';
import { Link } from 'react-router-dom';

function FirstPage() {
    const [position, setPosition] = useState(null); // Initially, button stays in place

    function moveButton() {
        const viewportWidth = window.innerWidth - 100;  // Prevent going off-screen
        const viewportHeight = window.innerHeight - 50; // Adjust for button height
        
        const randomX = Math.floor(Math.random() * viewportWidth);
        const randomY = Math.floor(Math.random() * viewportHeight);

        setPosition({ x: randomX, y: randomY });
    }

    return (
        <div className='container'>
            <div className='box'>
                <h1>Will You Be My Valentine?</h1>
                <img className="item-img" src={require('./teddy.png')} alt='teddy' width={350} />
                <br />
                <div className='btn-box'>
                    <Link to={'yes'}><button className='btn1'>Yes</button></Link>
                    <button
                        className='btn2'
                        onMouseOver={moveButton}
                        style={{
                            position: position ? 'fixed' : 'static', // Start as static, change to fixed after hover
                            left: position ? `${position.x}px` : 'auto',
                            top: position ? `${position.y}px` : 'auto',
                            transition: 'left 0.3s, top 0.3s',
                        }}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FirstPage;
