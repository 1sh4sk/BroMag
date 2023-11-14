import React from 'react';
import Card from 'react-bootstrap/Card';

export default function LocationCard({item}) {
    return (
        <div>
            <Card className='card-style card-style3'>
                <div className="card-img-div2 mx-auto"><Card.Img style={{height:"13rem"}} variant="top" src={item.img} /></div>
                <Card.Body>
                    <Card.Title className="text-center" style={{ fontSize: "30px", fontWeight: "600" }}>{item.title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}
