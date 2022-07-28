import "./css/Hero.css";

const Hero = (props) => {
  return (
    <div className="hero_wrapper">
      <div className="hero">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
