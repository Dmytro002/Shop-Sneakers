import React from 'react';
import Index from "../Card";

function Favorites(props) {
    return (

        <div className= "content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="">All sneakers</h1>
            </div>
            <div className="d-flex flex-wrap ">
                { items.map((item) =>(
                    <Index
                        key = {item.title}
                        title = {item.title}
                        price = {item.price}
                        imageUrl = {item.imageUrl}
                        onFavorite = {(obj) => onAddToFavorite(obj) }
                        onPlus = { (obj) => onAddToCart(obj)}
                    />
                ))}
            </div>
        </div>

    );
}

export default Favorites;