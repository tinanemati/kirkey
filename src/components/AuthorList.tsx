import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AuthorCard from "./AuthorCard";
import "./AuthorList.css";

const AuthorList: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="container-header">
          <ArrowBackIcon />
          <h4>You have Top 10 Authors</h4>
        </div>
        <AuthorCard />
        <p>hello</p>
      </div>
    </>
  );
};

export default AuthorList;
