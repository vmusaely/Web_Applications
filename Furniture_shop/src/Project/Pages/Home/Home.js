import React from "react";
import styles from "./homePageStyles.module.css";
import Heading from "./Heading";
import BestSellers from "./BestSellers";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

export default function Home() {

    const rooms = [
        {
            header: "LivingRoom",
            className: styles.livingroom
        },
        {
            header: "Kitchen",
            className: styles.kitchen
        },
        {
            header: "Bedroom",
            className: styles.bedroom
        },
        {
            header: "Bathroom",
            className: styles.bathroom
        }
    ];

    return (
        <>
            <Heading />
            <div className={styles.header}>High quality home decor</div>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue eu sagittis feugiat nunc sit est
                vitae eget. Nisl at sed ultrices pharetra massa consectetur lobortis velit fames. Iaculis arcu
                rhoncus tellus porta ornare nunc libero. Accumsan nisi, ullamcorper non venenatis egestas
                convallis sed dignissim massa.
            </div>
            <div className={`mt-5 ${styles.gridContainer}`}>
                {
                    rooms.map((item, index) => {
                        return (
                            <div key={index} className={item.header === 'Bathroom' ? styles.special : ''} >
                                <div className={item.className}></div>
                                <NavLink to="/404" className={`${styles.links} text-decoration-none`}>
                                    {item.header}
                                </NavLink>
                                <svg className="text-center mb-5" style={{ marginLeft: "295px" }} width="96" height="8" viewBox="0 0 96 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M95.3536 4.35356C95.5488 4.1583 95.5488 3.84172 95.3536 3.64645L92.1716 0.464474C91.9763 0.269212 91.6597 0.269212 91.4645 0.464474C91.2692 0.659736 91.2692 0.976319 91.4645 1.17158L94.2929 4.00001L91.4645 6.82844C91.2692 7.0237 91.2692 7.34028 91.4645 7.53554C91.6597 7.7308 91.9763 7.7308 92.1716 7.53554L95.3536 4.35356ZM-4.37114e-08 4.5L95 4.50001L95 3.50001L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#780202" />
                                </svg>
                            </div>
                        );
                    })
                }
            </div>
            <div className={styles.header}>Best Sellers</div>

            <BestSellers />
            <div className="float-right mr-5">
                <NavLink to='/404' className={`${styles.sofaFrancesca} m-0 d-block text-decoration-none`}>see more</NavLink>
                <svg width="100" height="8" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M99.3536 4.35354C99.5488 4.15828 99.5488 3.8417 99.3536 3.64644L96.1716 0.464458C95.9763 0.269196 95.6597 0.269196 95.4645 0.464458C95.2692 0.65972 95.2692 0.976302 95.4645 1.17156L98.2929 3.99999L95.4645 6.82842C95.2692 7.02368 95.2692 7.34026 95.4645 7.53553C95.6597 7.73079 95.9763 7.73079 96.1716 7.53553L99.3536 4.35354ZM4.37114e-08 4.5L99 4.49999L99 3.49999L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#780202" />
                </svg>
            </div>
            <Footer />
        </>
    )
}