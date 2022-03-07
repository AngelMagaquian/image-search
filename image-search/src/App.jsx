import { useState, useEffect } from "react";
import Navbar from './components/navbar'
import ImageCards from './components/imageCards'
import Search from './components/search'
import Footer from "./components/footer";
import './styles/app.css'
import { unsplash } from './access/unsplash'





function App() {
  //state
  const [image, setImage]= useState([])

  //llamada a la API
  const handleSearch= async(value) =>{
    const res = await fetch(unsplash.endPoint_Search+value,{headers:{Authorization:'Client-ID '+unsplash.clientID}})
    const data = await res.json()
    console.log(data.results)
    setImage(data.results)
  }

  const handleRandom= async()=>{
   /*  const res = await fetch(unsplash.endPoint_Random,{headers:{Authorization:'Client-ID '+unsplash.clientID}}) */
    const res = await fetch(unsplash.endPoint_Search+'developers',{headers:{Authorization:'Client-ID '+unsplash.clientID}})
    const data = await res.json()
    console.log(data)
    setImage(data.results)
    console.log(image)
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
          {image.length > 0 ? 
              image.map(img =>(<ImageCards key={img.id} data={img} handleLike={handleLike}/>))
              : null
          }
         </div>
       </div>

       <Footer/>
    </div>
   
  );
}

export default App;
