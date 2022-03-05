import { useState, useEffect } from "react";
import Navbar from './components/navbar'
import ImageCards from './components/imageCards'
import Search from './components/search'
import './styles/app.css'
import {clientID, endPoint} from './access/unsplash'





function App() {
  //state
  const [image, setImage]= useState([])
  //llamada a la API
  const handleSearch= async(value) =>{
    const res = await fetch(endPoint+value,{headers:{Authorization:'Client-ID '+clientID}})
    const data = await res.json()
    console.log(data.results)
    setImage(data.results)
  }

  const handleLike = (id) =>{
    let img = image.find((image=> id == image.id))
    let liked = img.liked_by_user
    if(liked === false){
      setImage([...image],[img.likes += 1])
    }else{
      setImage([...image],[img.likes -= 1])
    }
    setImage([...image], [img.liked_by_user = !liked])    
  }

  return (
      <div className="app-container">
         <Navbar/>
         <div className="header">
            <div className="container text-center">
              <div className="row">
                <h1>Image Search!</h1>
                <h6>Unsplash API</h6>
              </div>
              <div className="row">
                <Search handleSearch={handleSearch}/>
              </div>
            </div>
            
          </div>
         
         <div className="container image-container">
           <div className="row ">
            {image.length ? 
                image.map(img =>(<ImageCards key={img.id} data={img} handleLike={handleLike}/>))
                : null
            }
           </div>
         </div>
      </div>
   
  );
}

export default App;
