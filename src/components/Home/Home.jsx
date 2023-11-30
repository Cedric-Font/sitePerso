import "./Home.css"
export default function Home() {

  return (
    <div>
      <header>
        
        <a className="btn" href="#parcour">About</a>
        <a className="btn2" href="#projects">Project</a>
        
        
        
        <h1>CEDRIC FONT <br />
          <span className="textColor" >DEVELOPPEUR WEB</span></h1>
        <div className="description">
          <p className="descriptionDetails" >I m <span className="textColor" >Web developer</span> specializing in <span className="textColor" >JavaScript</span> and <span className="textColor" >React</span> framwork.
            Dev is passion.
            I can use node JS and <span className="textColor" >Express</span>.
            I know <span className="textColor" >HTML</span> and <span className="textColor" >CSS</span> .
          </p>
        </div>
        <p className="subTitle" >LEARN <span className="textColor" >MORE</span> ABOUT <br /> ME <span className="textColor" >&lt;/&gt;</span></p>
        <section id="backround" >
          <video autoPlay muted loop id="myVideo" >
            <source src="src/assets/back.mp4" type="video/mp4"></source>
          </video>
        </section>
      </header>
      <main>
      <section className="language" >
        <img className="jsLogo" src="src/assets/js.png" alt="" />
        <img className="nodeLogo" src="src/assets/node.png" alt="" />
        <img className="reactLogo" src="src/assets/reactLogo.png" alt="" />
      </section>
      <section>
        <div id="parcour" className="AboutMe" >
          <hr className="greyHr" style={{ width: "100%" }} />
          <p className="aboutDescription" >Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
          <h2 className="aboutTitle" >Get to know me!</h2>
          <h2 className="aboutTitle" >My Skills</h2>
          <p className="knowMe" >I m a full stack developer building the Front-end and back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
            Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.
            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
          <div className="logoContainer" >
            <p className="JS logo" >javaScript</p>
            <p className="react logo" >React</p>
            <p className="node logo" >Node</p>
            <p className="express logo" >Express</p>
            <p className="html logo" >HTML</p>
            <p className="css logo" >CSS</p>
            <p className="git logo" >GIT</p>
            <p className="github logo" >GIT HUB</p>
            <p className="sql logo" >SQL</p>
            <p className="sass logo" >SASS</p>
          </div>
          <button className="contactBtn" >Contact</button>
        </div>
      </section>
      <section id="projects" className="project" >
        <h2 className="projectTitle" >Project</h2>
        <div className="orangeSeparator"></div>
        <div className="projectContainer" >
          <img className="projectImg" src="./src/assets/projectSceen.png" alt="" />
          <div className="projectDetails" >
          <h2 className="projectTitle" >Syla Shop</h2>
          <p className="projectDescription" >Quick project in 2 week (my first).
            It’s e commerce web site who have to purpose make we use javaScript and css (flex box).
          </p>
          </div>
          <hr className="greyHr2" style={{ width: "100%" }} />
          <img className="projectImg" src="./src/assets/movies.png" alt="" />
          <div className="projectDetails" >
          <h2 className="projectTitle" >Syla Shop</h2>
          <p className="projectDescription" >Quick project in 2 week (my first).
            It’s e commerce web site who have to purpose make we use javaScript and css (flex box).
          </p>
          </div>
          <hr className="greyHr2" style={{ width: "100%" }} />
          <img className="projectImg" src="./src/assets/cringe.png" alt="" />
          <div className="projectDetails" >
          <h2 className="projectTitle" >Syla Shop</h2>
          <p className="projectDescription" >Quick project in 2 week (my first).
            It’s e commerce web site who have to purpose make we use javaScript and css (flex box).
          </p>
          </div>
          
          
        </div>

      </section>
      </main>
    </div>

  )
}