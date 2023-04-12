import { useState } from "react"
import "./main.css"

export default function Main() {

    let [isChange , setIsChange] = useState(false)

    setTimeout(()=>{
        setIsChange(true)
    },2500)

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

      <div className="subMainBox2 animate__animated animate__fadeInRight animate__delay-2s">

            <h1 className="arrow">&#8592;</h1>
            <h1 className="arrow">&#8594;</h1>

      </div>

    </div>
  )
}
