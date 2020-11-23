
import React from 'react';
import {Link} from "react-router-dom";
import {footerItems} from "./FooterData";

const footer = () => {
    const dataMenu = footerItems.menu;
    return (
        <div id="footer">
            {/*Copyright */}
            <ul className="copyright">
                {dataMenu.map((menu) => {
                    return (
                        <li key={menu.title}>
                            <Link to={menu.link}>
                                <span>{menu.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <ul className="copyright">
                <li>All rights reserved.</li><li>Design by: Sayyed Jamal Ghasemi</li>
            </ul>
        </div>
    );
};
export default footer;
