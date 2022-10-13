import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const QuoteStrip = () => {
  return (
    <div className="quotation">
      <FontAwesomeIcon icon={faQuoteLeft} size={"3x"} />

      <p className="quote-string-section">
        Our goal is to teach you how to keep your body healthy. A healthy body
        is essential for a happy life. We are on a mission to help as many as we
        can to live a happy life.
      </p>

      <FontAwesomeIcon icon={faQuoteRight} size={"3x"} />
    </div>
  );
};
export default QuoteStrip;
