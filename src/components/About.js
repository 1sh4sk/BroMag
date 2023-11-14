import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function About() {
    return (
        <div>
            <Container className="grid-container">
                <Row className='grid-row'>
                    <Col className='grid-col'>
                        <div className='grid-content'>
                            <h2>Who we are</h2>
                            <p>At [Your Restaurant Name], our journey began [Year Established] when [Founder's Name] had a vision of creating a place that celebrates culinary artistry and brings people together over exceptional food. With a background in [Founder's Culinary Background], [Founder's Name] set out to craft a menu that showcases the rich flavors, techniques, and traditions that inspire us</p>
                        </div>
                    </Col>
                    <Col className='grid-col'>
                        <img className="image" src="./images/Mask-group.png" alt="" />
                        <img className="subimage right-subimg" src="./images/Mask-group(1).png" alt="" />
                    </Col>
                </Row>
                <Row className='grid-row'>
                    <Col className='grid-col'>
                        <img src="./images/Mask-group.png" alt="" />
                        <img className="subimage left-subimg" src="./images/Mask-group(1).png" alt="" />
                    </Col>
                    <Col className='grid-col'>
                        <div className='grid-content'>
                            <h2>The bromag team</h2>
                            <p>Our culinary team, led by Chef [Chef's Name], is dedicated to creating dishes that inspire and delight. Our front-of-house team, under the guidance of [Manager's Name], is committed to ensuring your visit is nothing short of exceptional</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
