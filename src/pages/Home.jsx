import React from 'react';
import Index from "../Card";

function Home(props) {
    return (
        <div className= "content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="">All sneakers</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    { searchValue && <img onClick={ () =>setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear"/>}
                    <input  onChange={onChangeSearchInput}  value={searchValue} placeholder="Search..."/>
                </div>
            </div>
            <div className="d-flex ">
                { items.filter((item) => item.title.toLowerCase().includes(searchValue)).map((item) =>(
                    <Index
                        key = {item.title}
                        title = {item.title}
                        price = {item.price}
                        imageUrl = {item.imageUrl}
                        onFavorite = {(obj) => onAddToFavorite(obj) }
                        onPlus = { (obj) => onAddToCart(obj)}
                    />
                ))

                }

            </div>

        </div>
    );
}

export default Home;