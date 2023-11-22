import "./Home.css"
export default function Home() {

  return (
    <div>
      <header>
        <button className="btn" >discover</button>
        <div className="description">
          <p className="descriptionDetails" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque eveniet quas aliquid. Quibusdam ducimus debitis facilis aperiam itaque ipsum, provident nam beatae tempore, eveniet, sapiente minima officia? Quidem, reprehenderit rem!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non voluptatibus reiciendis iste odio, voluptates id quae nihil repudiandae, sequi numquam perspiciatis, sunt qui laudantium fugiat eum! Odio a autem voluptatem?
            lo
          </p>
        </div>
        <section id="backround" >
          <video autoPlay muted loop id="myVideo" >
            <source src="src/assets/back.mp4" type="video/mp4"></source>
          </video>
        </section>
      </header>
      <section className="language" >
      <img className="jsLogo" src="src/assets/js.png" alt="" />
      <img className="nodeLogo" src="src/assets/node.png" alt="" />
      <img className="reactLogo" src="src/assets/reactLogo.png" alt="" />
      </section>
      <section>

      </section>
    </div>

  )
}