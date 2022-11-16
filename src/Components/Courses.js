const Courses = (props) => {
  const { courseTitle, courseDescription, coursePicture } = props;
  return (
    <div className="course-card">
      <div className="course-card-title">
        <p>{courseTitle}</p>
        <img
          className="course-card-title-img"
          alt="decorative"
          src={coursePicture}
        />
      </div>
      <div className="course-card-description">
        {courseDescription}

        <span>
          <button className="course-button">Sign up</button>
        </span>
      </div>
    </div>
  );
};
export default Courses;
