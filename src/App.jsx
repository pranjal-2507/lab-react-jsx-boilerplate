import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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
let data = imageData()

function App() {
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
      <img src={data[0].img} alt="" width={720}px/>
      <img src={data[1].img} alt="" width={720}px/>
      <img src={data[2].img} alt="" width={720}px/>
      <img src={data[3].img} alt="" width={720}px/>
    </div>
    </>
  )
}

export default App;
