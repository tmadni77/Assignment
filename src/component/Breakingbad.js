import React, { useState, useEffect } from "react";
import "./breaking.css";


const Breakingbad = () => {
  const [data, setData] = useState([]);
  const Post = async () => {
    const url = `https://www.breakingbadapi.com/api/characters/`;
    const res = await fetch(url);
    const post = await res.json();
    setData(post);
  };
  useEffect(() => {
    Post()
  }, [])
  return(
      <>
      {data.map((data)=>(
          <div className="breaking" key={data.char_id}>
          <div className="img-container">
            <img className="img" src={data.img} alt={data.name} />
          </div>
          <div className="info">
            <span className="number">{data.char_id}</span>
            <h3 className="name">{data.name}</h3>
            <small className="type">
            Nickname: <span>{data.nickname}</span>
            </small>
          </div>
        </div>
        ))}
      </>
  )
};

export default Breakingbad;
