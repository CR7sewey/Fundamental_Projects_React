import React from "react";

const AsideUsers = ({ users, actualUser, setActualUser }) => {
  return (
    <div className="btn-container">
      {users.map((values) => (
        <button
          key={values.id}
          onClick={() => setActualUser(values)}
          className={
            actualUser?.id === values.id ? "job-btn active-btn" : "job-btn"
          }
        >
          {values.company}
        </button>
      ))}
    </div>
  );
};

export default AsideUsers;
