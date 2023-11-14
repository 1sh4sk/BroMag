import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Footer() {
    return (
        <div>
            <div>
                <footer className="bg-dark footer">

                    <div className='top-content'>
                        <img
                            src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <h4>www.brorestaurant.com</h4>
                    </div>

                    <hr />

                    <div className='footer-content'>
                        <div>
                            <h4>Contacts</h4>
                            <hr />
                            <div className='icon-para'>
                                <img width="34" height="34" src="https://img.icons8.com/fluency-systems-filled/96/E5E5E5/phone.png" alt="phone" />
                                <p>+91 9090909000</p>
                            </div>
                            <div className='icon-para'>
                                <img width="34" height="34" src="https://img.icons8.com/material-rounded/24/E5E5E5/mail.png" alt="mail" />
                                <p>restaurant@gmail.com</p>
                            </div>
                            <div className='icon-para'>
                                <img width="34" height="34" src="https://img.icons8.com/ios-filled/50/E5E5E5/marker.png" alt="marker" />
                                <p>Chennai, Pondycherry, coimbatore</p>
                            </div>
                        </div>

                        <div className='footer-form'>
                            <h1>GIVE YOUR WORDS</h1>

                            <div className='footer-form-content'>
                                <textarea className="text-area" rows="5" cols="50" placeholder='write something...'></textarea>

                                <Button className='footer-btn' type="submit">
                                    Submit
                                </Button>

                            </div>
                        </div>


                    </div>
                </footer>
            </div>
        </div>
    )
}
