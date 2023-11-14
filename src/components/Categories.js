import React from 'react';
import CategoryCard from './CategoryCard';
import { category } from '../data/CategoriesData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Categories() {
    return (
        <div>
            <div className='category-div'>
                <h2>Categories</h2>

                <div className='card-deck'>
                    <Row xs={2} sm={4} md={4} className="g-4">
                        {category.map((item, k) => {
                            return (
                                <Col key={k}>
                                    <div>
                                        <CategoryCard item={item} key={k} />
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </div>



            </div>
        </div>
    )
}
