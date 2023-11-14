import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CategoryCard({ item }) {
    return (
        <div>

            <Card className='card-style'>
                <div className="card-img-div"><Card.Img variant="top" src={item.img} /></div>
                <Card.Body>
                    <Card.Title className="text-center" style={{ fontSize: "30px", fontWeight: "600" }}>{item.title}</Card.Title>
                </Card.Body>
            </Card>

        </div>
    )
}
