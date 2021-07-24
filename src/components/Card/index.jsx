import React from 'react';

const Card = ( props) => {

    const  onClickButton = () => {
        alert(props.title)
    }
    return (
        <div className="card" >
            <div className="favorite">
                <img src="/img/unliked.svg" alt="Unliked"/>
            </div>
            <img  width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
            <p >{props.title}</p>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} $</b>
                </div>
                <button className="button" onClick={ onClickButton}>
                    <img  width={11} height={11} src="img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
};

export default Card;