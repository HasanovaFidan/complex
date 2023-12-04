import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Detail.css"

function AdminDetail() {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/products/${id}`).then(res => {
            setItem(res.data);
        });
    }, [id]);

    return (
        <div>
            <div className="car">
                <img src="https://i.gifer.com/7cLL.gif" className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.unitPrice}</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
       
    )
}

export default AdminDetail;

