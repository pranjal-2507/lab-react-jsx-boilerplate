import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    this.data = this.imageData()

    let gallerystyle = {
      textAlign:"center"
    }
  
    let styleMyDiv = {
      display:"grid",
      gridTemplateColumns:"50% 45%",
      placeItems: "center",
      gap:"20px"
      
    }
    return(
      <>
    <h1 style={gallerystyle}>Kalvium Gallery</h1>
    <div style={styleMyDiv}>
      <img src={this.data[0].img} alt="" width={720}px/>
      <img src={this.data[1].img} alt="" width={720}px/>
      <img src={this.data[2].img} alt="" width={720}px/>
      <img src={this.data[3].img} alt="" width={720}px/>
    </div>
    </>
    )
  }
}
