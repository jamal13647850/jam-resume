import React from 'react';

const portfolioItem = (props) => {
    const { picUrl, picAlt, header, link} = props;
    return (
        <article className="item">
            <a href={link} className="image fit"><img src={picUrl} alt={picAlt} /></a>
            <header>
                <h3>{header}</h3>
            </header>
        </article>
    );
};

export default portfolioItem;
