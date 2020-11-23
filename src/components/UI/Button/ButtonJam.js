import React from 'react';
import {Link} from "react-router-dom";

const buttonJam = (props) => {
    return (
        <Link to={props.link} className="button">{props.children} </Link>
    );
};

export default buttonJam;
