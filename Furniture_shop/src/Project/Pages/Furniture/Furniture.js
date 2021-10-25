import React from 'react';
import styles from './furnitureStyles.module.css';
import Navbar from '../Home/NavBar';
import BestSellers from '../Home/BestSellers';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Furniture() {

    const sections = [
        {
            to: '/furniture',
            label: 'LivingRoom',
            subSection: [
                {
                    label: 'Sofas',
                    to: '/404'
                },
                {
                    label: 'Tables',
                    to: '/404'
                },
                {
                    label: 'Chaires',
                    to: '/404',
                },
                {
                    label: 'Closets',
                    to: '/404',
                }
            ]
        },
        {
            to: '/bedroom',
            label: 'Bedroom',
            subSection: [
                {
                    label: 'Furniture',
                    to: '/404'
                },
                {
                    label: 'Mattresses',
                    to: '/404'
                },
                {
                    label: 'Bedding',
                    to: '/404'
                },
                {
                    label: 'Bedroom Decor',
                    to: '/404'
                }
            ]
        },
        {
            to: '/kitchen',
            label: 'Kitchen',
            subSection: [
                {
                    label: 'Ready Kitchen',
                    to: '/404'
                },
                {
                    label: 'Kitchen Tables',
                    to: '/404'
                },
                {
                    label: 'Bar Stools & Counter Stools',
                    to: '/404'
                },
                {
                    label: 'Kitchen Sets',
                    to: '/404'
                }]
        },
        {
            to: '/outdoor',
            label: 'Outdoor',
            subSection: [
                {
                    label: 'Tables',
                    to: '/404'
                },
                {
                    label: 'Chairs',
                    to: '/404'
                }
            ]
        },
        {
            to: '/office',
            label: 'Office',
            subSection: [
                {
                    label: 'Cabinet Furniture',
                    to: '/404'
                },
                {
                    label: 'Chairs',
                    to: '/404'
                },
                {
                    label: 'Sofas & Armchairs',
                    to: '/404',
                }
            ]
        },
        {
            to: '/restaurants',
            label: 'Restaurants',
            subSection: [
                {
                    label: 'Something',
                    to: '/404'
                }
            ]
        }
    ];

    return (
        <div className={styles.container}>
            <Navbar />
            <Container>

                <div className="mt-5 mb-5">
                    <Row>
                        {
                            sections.map((item, index) => {
                                return (
                                    <Col key={index}>
                                        <div
                                            to={item.to}
                                            className={`${styles.dropdown} text-decoration-none`}
                                            activeClassName={styles.activeLink}
                                        >
                                            {item.label}
                                            <div className={styles.triangle}></div>
                                            <div className={styles.dropdownContent}>
                                                {
                                                    item.subSection.map((subSection, i) => {
                                                        return (
                                                            <NavLink
                                                                className={styles.links}
                                                                key={i}
                                                                to={subSection.to}
                                                            >
                                                                {subSection.label}
                                                            </NavLink>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </Container>
            <BestSellers />
        </div>
    )
}