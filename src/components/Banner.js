import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Banner() {
    return (
        <div>
            <div className='landing-div'>
                <div>
                    <h1><span style={{ fontWeight: "700", fontSize: "120px" }}>DELICIOUS</span> MOMENTS EVERY BITE A MEMORY</h1>
                </div>
                <Button variant="outline-light landing-btn">View order menu</Button>
            </div>
        </div>
    )
}
