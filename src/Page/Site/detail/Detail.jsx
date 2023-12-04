import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import "./Detail.css"


function Detail() {
  const{id}=useParams()
  const[item,setItem]=useState({})
  useEffect(()=>{
    axios.get(`https://northwind.vercel.app/api/products/${id}`).then(res=>{
      setItem(res.data)
      console.log(res.data);

    })
  },[])
  return (
    <div>
          <div className='flexo'>
<div className="left">
<img  src="https://media.istockphoto.com/id/638240858/photo/pumpkin-salad.webp?b=1&s=170667a&w=0&k=20&c=tO3FiO-WFlwzLW0S9X_cmxUKYbr6u5x2yzXl-SngGPI=" alt="" />
</div>
<div className="right">
<h3>{item.name}</h3>
      <h6>{item.quantityPerUnit}</h6>
      <p>{item.categoryId}</p>
</div>

    
    
    </div>
    </div>
  )
}

export default Detail
