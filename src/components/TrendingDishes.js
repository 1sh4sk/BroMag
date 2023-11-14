import React from 'react';
import TrendingDishCard from './TrendingDishCard';
import { trendingDishes } from '../data/TrendingDishData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function TrendingDishes() {
    return (
        <div>
            <div className='category-div'>
                <div>
                    <h2>Our trending dishes</h2>
                </div>

                <div className='card-deck'>
                    <Row xs={2} sm={4} md={4} className="g-4">
                        {
                            trendingDishes.map((item, k) => {
                                return (
                                    <Col key={k}>
                                        <div>
                                            <TrendingDishCard item={item} key={k} />
                                        </div>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </div>
            </div>

        </div>
    )
}
