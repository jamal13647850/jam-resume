import React from 'react';
import avatar from '../../assets/images/avatar.jpg';

const logo = (props) => {
    return (
        <div id="logo">
            <span className="image avatar48"><img src={avatar} alt={props.title} /></span>
            <h1 id="title">{props.title}</h1>
            <p>{props.children}</p>
       </div>
    );
};

export default logo;
