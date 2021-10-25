import React from 'react';
import styles from './BestSellersStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

export default function Footer() {

    const sofa = [styles.sofa2, styles.sofa3, styles.sofa4];

    return (
        <>
            <div className={styles.sofa}>
                <div style={{ height: '500px' }}>
                    <div className={styles.rectangle}>
                        <div className={styles.priceAreaX}>
                            <p className={styles.sofaFrancesca}>Sofa Francesca</p>
                            <p className={styles.price}>300$</p>
                            <button className={styles.add}>
                                <FontAwesomeIcon icon={faShoppingCart} /> <span className="ml-2">Add</span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.sofa1}></div>
                </div>
                <Row>
                    {
                        sofa.map((item, index) => {
                            return (
                                <Col key={index} className={`${item} mr-2`}>
                                    <div className={styles.priceArea}>
                                        <p className={styles.sofaFrancesca}>Sofa Francesca</p>
                                        <p className={styles.price}>300$</p>
                                        <NavLink
                                            className={`${styles.add} text-decoration-none`}
                                            to="/404"
                                        >
                                            <FontAwesomeIcon icon={faShoppingCart} /> <span className="ml-2">Add</span>
                                        </NavLink>
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Row>
            </div>
        </>
    )
}