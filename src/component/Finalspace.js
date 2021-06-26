import React, { Component } from "react";
import "./styles.css"

export default class Finalspace extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data:[]
    };
  }
  loop= async()=>{
      for(let i=1;i<=40;i++){
        await this.Post(i);
      }
  }
  Post =  async(id)=>{
      const url=`https://finalspaceapi.com/api/v0/character/${id}`;
      const res= await fetch(url);
      const post=await res.json();
      this.setState({data:[...this.state.data, post]})
  }
  componentDidMount(){
      this.loop();
  }

  render() {
    const {data} =this.state;
    return (
      <>
        {data.map((data)=>(
          <div className="breaking" key={data.id}>
          <div className="img-container">
            <img className="img" src={data.img_url} alt={data.name} />
          </div>
          <div className="info">
            <span className="number">{data.id}</span>
            <h3 className="name">{data.name}</h3>
            <small className="type">
              Gender: <span>{data.gender}</span>
            </small>
          </div>
        </div>
        ))}
        
      </>
    );
  }
}
