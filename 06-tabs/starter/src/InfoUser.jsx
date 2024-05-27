import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const InfoUser = ({ actualUser }) => {
  return (
    <article>
      <h3>{actualUser?.title}</h3>
      <span className="job-company">{actualUser?.company}</span>
      <p className="job-date">{actualUser?.dates}</p>
      <div>
        {actualUser?.duties.map((values, index) => (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{values}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default InfoUser;
