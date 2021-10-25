import React from "react";
import NavBar from "./NavBar";
import styles from "./headingStyles.module.css";
import { Button } from "react-bootstrap";

function Heading() {
    return (
        <div className={styles.heading}>
            <NavBar />
            <div className={styles.headerText}>Create your comfort zone.</div>
            <Button
                variant="light"
                className={styles.btn}
                onClick={() => window.scrollTo(0, 900)}
            >
                Shop now
             </Button>
            <div>
                <svg className="mt-5" width="8" height="45" viewBox="0 0 8 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.64644 44.3536C3.84171 44.5488 4.15829 44.5488 4.35355 44.3536L7.53553 41.1716C7.73079 40.9763 7.73079 40.6597 7.53553 40.4645C7.34027 40.2692 7.02369 40.2692 6.82843 40.4645L4 43.2929L1.17157 40.4645C0.976309 40.2692 0.659727 40.2692 0.464464 40.4645C0.269202 40.6597 0.269202 40.9763 0.464464 41.1716L3.64644 44.3536ZM3.5 -2.18557e-08L3.5 44L4.5 44L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="#780202" />
                </svg>
            </div>
        </div>
    );
};

export default Heading;