import { useState, useEffect } from "react";
import Navbar from './components/navbar'
import ImageCards from './components/imageCards'
import './styles/app.css'
import {clientID, endPoint} from './access/unsplash'





function App() {
  //state
  const [image, setImage]= useState([])
  //llamada a la API
  const search= async(value) =>{
    const res = await fetch(endPoint+value,{headers:{Authorization:'Client-ID '+clientID}})
    const data = await res.json()
    console.log(data.results)
    setImage(data.results)
  }
  console.log(image)
  return (
    
      <div className="app-container">
         <Navbar search={search}/>
         <div className="image-container">
           <div className="row">
            {image.length !=0 ? 
                image.map(img =>(<ImageCards key={img.id} props={img}/>))
                : null
            }
           </div>
            
           
         </div>
      </div>
   
  );
}

export default App;
