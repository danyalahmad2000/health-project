import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard(props) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const MAX_LINES = 4;
  const descriptionLines = props.description.split("\n");
  const showReadMore = descriptionLines.length > MAX_LINES;

  return (
    <div className="info-cards">
      <span className="info-card-icon">
        <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
      </span>
      <p className="info-card-title">{props.title}</p>
      <p className="info-card-description">
        {descriptionLines.slice(0, MAX_LINES).join("\n")}
        {showReadMore && !expanded && "... "}
        {showReadMore && (
          <button className="read-more-button" onClick={toggleExpand}>
            {expanded ? "Show Less" : "Show More"}
          </button>
        )}
        {expanded && descriptionLines.slice(MAX_LINES).join("\n")}
      </p>
    </div>
  );
}

export default InformationCard;
