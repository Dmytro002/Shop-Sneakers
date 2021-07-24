

function App() {
  return (

    <div className= "wrapper clear">
        <div className="overlay">
            <div  className="drawer">
             <h2 className="mb-30">Basket</h2>

            <div className=" items">
                <div className="cartItem d-flex align-center">

                   
                    <div style={{backgroundImage: 'url(img/sneakers/1.jpg)'}} className="cartItemImg"></div>
                    <div className="mr-20">
                        <p className="mb-5">Men's Nike Air Max 270 Sneakers</p>
                        <b>12000$</b>
                    </div>
                    <img  className=" removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                </div>
                <div className="cartTotalBlock">
                    <ul >
                        <li className="  d-flex">
                            <span>Total</span>
                            <div className="app"></div>
                            <b>21 498 $</b>
                        </li>
                        <li className="  d-flex">
                            <span>Tax: 5%</span>
                            <div ></div>
                            <b>1074 $</b>
                        </li>
                    </ul>
                    <button>Checkout</button>
                </div>
            </div>
            </div>
        </div>
   <header className= "d-flex justify-between align-center p-40">
     <div className="cartItem d-flex align-center">
      <img  width={40} height={40} src="/img/logo.png"/>
      <div>
          <h3 className= "text-uppercase" >REACT SNEAKERS</h3>
          <p>Shop for the best sneakers</p>
      </div>
     </div>

       <ul className= "d-flex">
      <li className= " mr-30">
          <img  width={18} height={18} src="/img/cart.svg"/>
          <span>1200$</span>
      </li>
           <li>
               <img  width={20} height={20} src= "img/user.svg"/>
           </li>
       </ul>

   </header>

     <div className= "content p-40">
         <div className="d-flex align-center justify-between mb-40">
             <h1 className="">All sneakers</h1>
             <div className="search-block d-flex">
                 <img src="/img/search.svg" alt="Search"/>
                 <input placeholder="Search..."/>
             </div>
         </div>

          <div className="card" >
              <div className="favorite">
                  <img src="/img/unliked.svg" alt="Unliked"/>
              </div>
              <img  width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
              <p >Men's Sneakers Nike Blazer Mid Suede</p>
              <div className="d-flex justify-between">
                  <div className="d-flex flex-column">
                      <span>Цена:</span>
                      <b>12 999 $</b>
                  </div>
                  <button className="button">
                      <img  width={11} height={11} src="img/plus.svg" alt="Plus"/>
                  </button>
              </div>
          </div>


     </div>

    </div>
  );
}

export default App;
