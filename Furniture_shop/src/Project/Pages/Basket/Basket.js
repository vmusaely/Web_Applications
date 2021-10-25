import React, { useState } from 'react';
import styles from './basketStyles.module.css';
import NavBar from '../Home/NavBar';
import PaySystem from './PaySystem';
import { Container, Row, Col } from 'react-bootstrap';

export default function Basket() {

    const [card, setCard] = useState(false);

    return (
        <div className={styles.container}>
            <NavBar />
            <Container className="mt-5">
                <Row>
                    <Col className={styles.bg}>
                        <div className={styles.sofa1}>
                            <div className={styles.priceArea}>
                                <p className={styles.sofaFrancesca}>Sofa Francesca</p>
                                <p className={styles.price}>300$</p>
                                <button
                                    onClick={() => setCard(true)}
                                    className={`${styles.add} text-decoration-none`}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col className={styles.bg}>
                        <div className={styles.sofa2}>
                            <div className={styles.priceArea}>
                                <p className={styles.sofaFrancesca}>Sofa Francesca</p>
                                <p className={styles.price}>300$</p>
                                <button
                                    onClick={() => setCard(true)}
                                    className={`${styles.add} text-decoration-none`}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {
                card ? <PaySystem show={setCard} /> : null
            }
        </div>
    );
};