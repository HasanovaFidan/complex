
import React, { useContext, useEffect, useState } from 'react';
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import { useParams } from 'react-router';

const Edit = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [edit,setEdit]=useState({})
    useEffect(() => {
      axios.get(`https://northwind.vercel.app/api/products/${id}`).then((res) => {
        setEdit(res.data);
        setLoading(false);
      });

   
    }, []);
    useEffect(()=>{
      formik.setValues({
        name: edit.name,
        unitPrice: edit.unitPrice,
      })
    },[edit])
    const formik = useFormik({
      initialValues: {
        name: "",
        unitPrice: "",
      },
      onSubmit: (values) => {
        axios
          .put(`https://northwind.vercel.app/api/products/${edit.id}`,values)
          .then((res) => {
          
            console.log(res.data);
          });
      },
    });
    return (
      <>
          <form className="edit_product_form" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div>
              <label htmlFor="unitPrice">Price:</label>
              <input
                id="unitPrice"
                name="unitPrice"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.unitPrice}
              />
            </div>
  
            <button type="submit">Submit</button>
          </form>
      </>
    );
  };
  
  export default Edit;
