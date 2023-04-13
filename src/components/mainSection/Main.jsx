import { useState } from "react"
import img1 from "../.././assets/bag.webp"
import img2 from "../.././assets/bag2.webp"
import img3 from "../.././assets/bag3.webp"
import img4 from "../.././assets/bag4.webp"
import img5 from "../.././assets/bag5.webp"
import "./main.css"

export default function Main() {

    let [isChange , setIsChange] = useState(false);
    let [i, setI] = useState(0)
    let [image, setImage] = useState(img1)
    let img = [img1, img2, img3, img4, img5 ]

    setTimeout(()=>{
        setIsChange(true)
    },2500)

    const backgroundImageUp = ()=>{

      if (i === 4 ) {
        setI(0);
      }
      else{
        setI(++i);
      }
      setImage(img[i]);
      console.log(i);
    } 
    
    const backgroundImageDown = ()=>{
            
      if (i === 0) {
        setI(4);
      }
      else{
        setI(--i);
      }
        setImage(img[i]);
    }

  return (
    <div className="main">

        <h1 className={`wellcome animate__animated animate__fadeIn ${(isChange)?" hide ": null}`}>Wellcome</h1>

      <div className="subMainBox1 animate__animated animate__fadeInLeft animate__delay-2s">

        <div className="headings">
            <h3 className="name">Tom Fletcher</h3>
            <h1 className="title">Elegent Leather <br/> Men's Backpacks</h1>
            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa, eos aperiam eaque veniam repellat a optio. Ducimus minima eaque enim incidunt quos iusto quas, et, explicabo perspiciatis, quibusdam ipsum!</p>
            <button className="btn">Explore More</button>
        </div>

        <div className="footer">
           <span className="location">^</span>  <span className="loc"><b>Location: </b> New York</span>
        </div>


      </div>

      <div id="subMainBox2" style={{ backgroundImage:`url(${image})`}} className="subMainBox2 animate__animated animate__fadeInRight animate__delay-2s">
            
            <div className="certifite"><div className="cer">©</div></div>

            <h1 className="arrow" onClick={backgroundImageUp}>&uarr;</h1>
            <h1 className="arrow" onClick={backgroundImageDown}>&darr;</h1>

      </div>

    </div>
  )
}
