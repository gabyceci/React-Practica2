import "./about.css"

const About = ({nombre, sobreMi}) => {
    return (
      <>
        <div type="card" className="about"> 
          <img src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_1280.png" 
          class="card-img-top" 
          alt="..." 
          className="imagen"/>
        
          <div class="card-body">
          <br />

            <h5 class="card-title">{nombre}</h5>
            <br />
            <p>{sobreMi}</p>
            
          </div>
        </div>
      </>
    );
  };
  
  export default About;
  