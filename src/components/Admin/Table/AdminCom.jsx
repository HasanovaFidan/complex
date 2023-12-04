
import React, { useContext } from 'react';
import DataContexs from '../../../contexts/Contexts';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminCom() {
  const { data, setData, loading, error, setError } = useContext(DataContexs);

  const handleDelete = (id) => {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`)
      .then(() => {
        const deleteTable = data.filter(item => item.id !== id);
        setData(deleteTable);
        toast.error("Məhsul silindi");
      });
  };

  return (
    <div>
      {loading ? (
        <div style={{ marginLeft: '700px' }} className="text-center">
          <div style={{ fontSize: '20px' }} className="spinner-border" role="status">
            <span style={{ fontSize: '60px' }} className="sr-only"></span>
          </div>
        </div>
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">unitsInStock</th>
              <th>Delete</th>
              <th>Edit</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.unitPrice}</td>
                <td>{item.unitsInStock}</td>
                <td><button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button></td>
                <td>
                 
                  <Link to={`detail/${item.id}`}><button className='btn btn-info'>Detail</button></Link>
                </td>
           <td>  <Link to={`edit/${item.id}`}>
                <button className="btn btn-success">Edit</button>
              </Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Toaster />
    </div>
  );
}

export default AdminCom;
