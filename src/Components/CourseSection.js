import Courses from "./Courses";
import cardPicture from "../images/card_picture.jpeg";
import cardPicture2 from "../images/card_picture_2.jpg";
import cardPicture3 from "../images/card_picture_3.png";
const CourseSection = () => {
  return (
    <div className="course-wrapper">
      <Courses
        courseTitle="Health Nutrition Course"
        courseDescription="Text for describing what the course is, what people gonna learn and
            all the info they need to know.Text for describing what the course
            is, what people gonna learn and all the info they need to know.Text
            for describing what the course is, what people gonna learn and all
            the info they need to know."
        coursePicture={cardPicture}
      />
      <Courses
        courseTitle="1 a day advice"
        courseDescription="Text for describing what the course is, what people gonna learn and
            all the info they need to know.Text for describing what the course
            is, what people gonna learn and all the info they need to know.Text
            for describing what the course is, what people gonna learn and all
            the info they need to know."
        coursePicture={cardPicture2}
      />
      <Courses
        courseTitle="Intense course"
        courseDescription="Text for describing what the course is, what people gonna learn and
            all the info they need to know.Text for describing what the course
            is, what people gonna learn and all the info they need to know.Text
            for describing what the course is, what people gonna learn and all
            the info they need to know."
        coursePicture={cardPicture3}
      />
    </div>
  );
};
export default CourseSection;
