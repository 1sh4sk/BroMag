import React from 'react';
import LocationCard from './LocationCard';
import { locations } from '../data/LocationData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Locations() {
    return (
        <div>
            <div className='category-div'>
                <div>
                    <h1 className='location-heading'>LOCATIONS</h1>
                </div>
                <div className="location-deck">
                    <Row xs={1} sm={3} md={3} className="g-4">
                        {
                            locations.map((item, k) => {
                                return (
                                    <Col key={k}>
                                        <div>
                                            <LocationCard item={item} key={k} />
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
