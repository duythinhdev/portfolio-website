import "./about.css";
import Award from "../../img/award.png";
import LandMark from "../../img/vietnam-g44a96d5e0_640.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            // src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            src={LandMark}
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         I'm a software developer with more than 1 year of experience. I'm interested in learning new technologies to become a senior front-end developer which is my future orientation
        </p>
        <p className="a-desc">
          My name is Do Duy Thinh and I'm studying Computer Science at Ho Chi Minh University of Technology (HCMUT) of 2025. I'm from Vietnam and my goal is to become a software engineer.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">My goal is to become a software engineer. </h4>
            <p className="a-award-desc">
            I graduated from Cao Thang Technical College and currently I am studying at Ho Chi Minh City University of Technology (HCMUT).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
