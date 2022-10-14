import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-div">
      <p>2022 ViteAcademia</p>
      <p>All Rights Reserved</p>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGraduationCap} size={"2x"} />
        </li>
        <li>
          <FontAwesomeIcon icon={faUserGraduate} size={"2x"} />
        </li>
        <li>
          <FontAwesomeIcon icon={faUtensils} size={"2x"} />
        </li>
      </ul>
      <ul>
        <li>Privacy </li>
        <li>Terms</li>
      </ul>
    </div>
  );
};
export default Footer;
