import cardPicture from "../images/card_picture.jpeg";
import cardPicture2 from "../images/card_picture_2.jpg";
import cardPicture3 from "../images/card_picture_3.png";

const Courses = () => {
  //const [courseTitle, courseDescription]= course
  return (
    <>
      <div className="course-wrapper">
        <div className="course-card">
          <div className="course-card-title">
            <p>Health Nutrition Course</p>
            <img
              className="course-card-title-img"
              alt="decorative"
              src={cardPicture}
            />
          </div>

          <div className="course-card-description">
            Text for describing what the course is, what people gonna learn and
            all the info they need to know.Text for describing what the course
            is, what people gonna learn and all the info they need to know.Text
            for describing what the course is, what people gonna learn and all
            the info they need to know.
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-title">
            <p>1 a day advice</p>
            <img
              className="course-card-title-img"
              alt="decorative"
              src={cardPicture2}
            />
          </div>

          <div className="course-card-description">
            Text for describing what the course is, what people gonna learn and
            all the info they need to know.Text for describing what the course
            is, what people gonna learn and all the info they need to know.Text
            for describing what the course is, what people gonna learn and all
            the info they need to know.
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-title">
            <p>Intense course</p>
            <img
              className="course-card-title-img"
              alt="decorative"
              src={cardPicture3}
            />
          </div>

          <div className="course-card-description">
            Text for describing what the course is, what people gonna learn and
            all the info they need to know.Text for describing what the course
            is, what people gonna learn and all the info they need to know.Text
            for describing what the course is, what people gonna learn and all
            the info they need to know.
          </div>
        </div>
      </div>
    </>
  );
};
export default Courses;
