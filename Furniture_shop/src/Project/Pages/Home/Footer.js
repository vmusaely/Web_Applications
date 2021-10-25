import React from 'react';
import styles from './footerStyles.module.css';
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Footer() {
    const links = [
        ["About Us", "Student Discount", "Coupons"],
        ["Contact Us", "Customer Service"],
        ["FAQ", "Order Status"],
    ];
    return (
        <>
            <div className={styles.footer}>
                <Row>
                    {
                        links.map((item, index) => {
                            return (
                                <Col key={index} className="d-flex justify-content-center">
                                    <div className="mt-4" style={{ textAlign: 'start' }}>
                                        {
                                            item.map((lable, i) => {
                                                return (
                                                    <div key={i} className="mt-3">
                                                        <NavLink
                                                            to="/404"
                                                            className={`${styles.links} text-decoration-none`}
                                                        >
                                                            {lable}
                                                        </NavLink>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </Col>
                            )
                        })
                    }
                    <Col className="d-flex justify-content-center">
                        <div className="mt-4">
                            <div
                                className={`${styles.links} mt-3`}
                                style={{ textAlign: 'start' }}
                            >
                                <a href="tel:+123 456789" className={`${styles.links} text-decoration-none`}>Call Us: +123 456789</a>
                            </div>
                            <div
                                className={`${styles.links} mt-3`}
                                style={{ textAlign: 'start' }}
                            >
                                Hours: Monday-Friday 10:00-21:00
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};