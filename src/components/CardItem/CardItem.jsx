import React from 'react';
import { Link } from 'react-router-dom'; 
// import '../Projects/projects.scss';

const CardItem = ({html_url, src, label, text}) => {
    return (
        <div>
            <li className="cards__item">
                <a className="cards__item__link" href={html_url} target="blank">
                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img src={src} alt="" className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{text}</h5>
                    </div>
                </a>
            </li>
        </div>
    )
}

export default CardItem
