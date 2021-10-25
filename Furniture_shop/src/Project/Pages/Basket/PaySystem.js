import React from 'react';
import styles from './paySystemStyles.module.css';
import { Modal, Row, Col } from 'react-bootstrap';

export default function PaySystem(props) {

    return (
        <Modal
            show={true}
            onHide={() => props.show(false)}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="d-flex justify-content-center align-items-center">
                <div className={styles.card}>
                    <div className="d-flex m-4">
                        <div className={styles.redCircle}></div>
                        <div className={styles.yellowCircle}></div>
                    </div>
                    <div className="pl-3 pr-3 mt-5">
                        <div className={styles.line}>
                            <span>Card Number</span>
                            <span className="float-right">0123-4567-8901-2345</span>
                        </div>
                        <div className={styles.line}>
                            <span>Name</span>
                            <span className="float-right mt-auto">Tom Thompson</span>
                        </div>
                        <Row>
                            <Col>
                                <div className={styles.line}>
                                    <span>Exp.date</span>
                                    <span className="float-right">12/24</span>
                                </div>
                            </Col>
                            <Col>
                                <div className={`${styles.line}`}>
                                    <span>CVC</span>
                                    <span className="float-right">1234</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className={styles.accept}>
                    <div className="text-center">
                        <p className={styles.header}>Sofa Francesca</p>
                        <p className={styles.price}>300$</p>
                        <button
                            className={styles.btn}
                            onClick={() => props.show(false)}
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};