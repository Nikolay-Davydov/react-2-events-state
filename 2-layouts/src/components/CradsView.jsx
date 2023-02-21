import React from 'react'

export default function CardsView(props) {

  let ShopCard = props.ShopCard.map((item, index)=>{
    return(
      <>
      <div className="card" key={index}>
        <div className="name" >{item.name}</div>
        <div className="color">{item.color}</div>
         <img className="img" src={item.img}></img>
        <div className="footer">
          <div className="price">${item.price}</div>
          <div className="add_card">ADD TO CART</div>
        </div>
      </div>
      </>
    )
  });

  return (
    <div className="Cards">
      {ShopCard}
    </div>
  );
}