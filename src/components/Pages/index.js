import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

function Pages({ onClickBack, onClickNext }) {
  return (
    <div className="page-wrapper">
      <div className="page-btn">
        <button onClick={onClickBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </button>
        <button onClick={onClickNext}>
          <span> Next</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Pages;
