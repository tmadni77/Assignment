import React, { useState } from "react";

const HookCounter4 = () => {
  const [items, setItems] = useState([{ id: 0, value: Math.random() * 10 }]);
  const [data, setData] = useState([]);
  const [id,setId]=useState(1);

  const addItem = async () => {
    console.log("id",id);
    const url = `https://www.breakingbadapi.com/api/characters/${id}`;
    const res = await fetch(url);
    const post = await res.json();
    setId(id+1);
    setData([...data, post]);
    setItems([...items, { id: items.length, value: Math.random() * 10 }]);
    console.log("items",items);
    console.log("data",data);
  };

  return (
    <>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
};

export default HookCounter4;
