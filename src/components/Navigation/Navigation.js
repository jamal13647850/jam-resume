import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const navigation = (props) => {
    const {data} = props;
    const dataMenu = data.menu;

    return (
        <nav id="nav">
            <ul>
                {dataMenu.map((menu) => {
                    return (
                        <li key={menu.title}>
                            <Link to={menu.link}>
                                <FontAwesomeIcon icon={menu.icon} size="sm"/>
                                {menu.title}
                            </Link>
                        </li>
                    )
                })}

            </ul>
        </nav>
    );
};

export default navigation;
