import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const socials = (props) => {
    const {link , icon, title} = props;
    return (
            <li>
                <a target="_blank" href={link} className="icon">
                    <FontAwesomeIcon icon={icon} size="2x"/>
                    <span className="label">{title}</span>
                </a>
            </li>

    );
};

export default socials;
