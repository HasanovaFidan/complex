import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContexs from '../../../contexts/Contexts';
import { Toaster,toast } from 'react-hot-toast';

function Header() {
    const {data,setData,original,setOrginal} = useContext(DataContexs)
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
    toast.success('Məhsul azdan çoxa sıralandı')
  };
  const handleClic = (e) => {
    e.preventDefault();
    let sorted = [...data].sort((a, b) => b.unitPrice - a.unitPrice);
    setData([...sorted]);
    toast.success('Məhsul  çoxdan aza sıralandı')
  };

  return (
    <div>
      <header>
        <div className="header__right">
          <h1>F <span>World</span></h1>
        </div>
        <div className="header__left">
          <Link to="/">Home</Link>
          <Link to={"/admin"}>Admin</Link>
        </div>
        <div className="lefter">
          <form className="d-flex" role="search">
            <input onChange={(e)=>handleChange(e)} className="form-control me-2" type="search" placeholder='search' />
            <button onClick={(e)=> handleClick(e)} className="button btn btn-outline-success">Sort</button>
            <button onClick={(e)=> handleClic(e)} className="button btn btn-outline-success">Sort</button>
          </form>
        </div>
      </header>
      <Toaster/>
    </div>
  );
}

export default Header;

