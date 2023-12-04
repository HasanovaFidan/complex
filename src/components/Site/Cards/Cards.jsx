import axios from 'axios';
import Header from '../../../layout/Site/Header/Header';
import Card from './Card';
import "./cards.css"
import { useContext } from 'react';
import DataContexs from '../../../contexts/Contexts';

function Cards() {
  let { data, setData, loading, setLoading } = useContext(DataContexs);
  console.log(data)
  return (
    <div>
      <div className="all">
        {
          loading ? (
            <div style={{ marginLeft: "700px" }} class="text-center">
              <div style={{ fontSize: "20px" }} class="spinner-border" role="status">
                <span style={{ fontSize: "60px" }} class="sr-only"></span>
              </div>
            </div>
          )
            : data.length === 0 ? (
              <h1 style={{ marginLeft: "650px" }}>Axtardığınız məhsul tapılmadı</h1>
            ) : (
              data.map((item, index) => <Card key={index} item={item} />)
            )}
      </div>
    </div>
  );
}

export default Cards;
