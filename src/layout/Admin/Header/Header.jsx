import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { Table } from '@mui/material'
import DataContexs from '../../../contexts/Contexts'


export default function Header() {
  const {data,setData,original}=useContext(DataContexs)
  const handleChange=(e)=>{
    let search=e.target.value.trim().toLowerCase()
   if(search==""){
    setData([...original])
   }
   else{
    let searchedCards=data.filter(data=>data.name.trim().toLowerCase().includes(search))
    setData([...searchedCards])
   }
    }


const handleClick = (e) => {
e.preventDefault();
let sorted = [...data].sort((a, b) => a.unitPrice - b.unitPrice);
setData([...sorted]);
};

const handleAz=(e)=>{
  e.preventDefault();
  let sorted=data.sort((a, b)=>b.unitPrice-a.unitPrice)
  setData([...sorted])
}
  return (
    <div>
        <div className='header'>
  <div className="righter">
  <Link to="/admin">  <h1>AdminPage</h1></Link>
  </div>
  <div className="middle">

  <Link to="/">Home</Link>
  <Link to="add">Add Product</Link>
  </div>
 
<div className="lefter">
<form class="d-flex" role="search">
        <input onChange={(e)=>handleChange(e)} class="form-control me-2" type="search" placeholder='search' />
        <button onClick={(e)=>handleClick(e)}  class=" button btn btn-outline-success">Sort</button>
        <button onClick={(e)=>handleAz(e)}  class=" button btn btn-outline-success">Sort</button>

      </form>
</div>
  </div>
  <Table/>
    </div>
  )
}
