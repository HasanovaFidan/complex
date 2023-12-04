import React from 'react'
import "./cards.css";
import { Link } from 'react-router-dom';


function Card({item}) {
  return (
    <div>
                <div className="cart">
  <img src="https://static.vecteezy.com/system/resources/previews/002/076/927/original/cooking-ingredients-on-a-blue-wooden-background-free-photo.jpg" alt="" />
        <h2>{item.name}</h2>
        <p>{item.id}</p>
        <p>{item.unitPrice}</p>
        <Link className='link' to={`/${item.id}`}>Detail</Link>
    </div>
    </div>
  )
}

export default Card