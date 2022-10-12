import image1 from "../images/health.png";
import image2 from "../images/nutrition.png";
import image3 from "../images/health-coach.png";
import Blob from "../Blob";
const MainSection = () => {
  return (
    <div className="main-section-container">
      <div className="main-section-div">
        <Blob text="Health" className="blob-health" />
      </div>
      <div className="main-section-div">
        <Blob text="Health Nutrition Course" className="blob-health-n" />
      </div>
      <div className="main-section-div">
        <Blob text="Health Coach" className="blob-health-coach" />
      </div>
      <p className="main-section-content">
        ViteAcademia provides online courses and coaching sessions to improve
        your health and wellbeing.
      </p>
      <p className="main-section-content">
        There are no good or bad foods but the relative amounts to be consumed
        play a key role in our health. You can develop a deeper understanding of
        the food and implement lasting changes that improve your energy, balance
        and health…
      </p>
      <p className="main-section-content">
        ViteAcademia's health coach develops a personalised program for your
        better health physically and mentally.
      </p>
    </div>
  );
};
export default MainSection;
