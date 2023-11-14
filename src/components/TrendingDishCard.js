import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function TrendingDishCard({item}) {
    return (
        <div>
            <Card className='text-center card-style2 '>
                <div className='card-img mx-auto'><Card.Img variant="top" src={item.img} /></div>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    ₹{item.price}
                    </Card.Text>
                    <Button variant="dark">Order now</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
