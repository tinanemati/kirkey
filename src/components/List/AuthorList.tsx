import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AuthorCard from "./AuthorCard/AuthorCard";
import "./AuthorList.css";
import data from "../../data.json";

const AuthorList: React.FC = () => {
  const authors = data.authors;
  console.log(authors);
  return (
    <>
      <div className="container">
        <div className="container-header">
          <ArrowBackIcon />
          <h4>You have Top 10 Authors</h4>
        </div>
        {authors?.map((author, index) => (
          <AuthorCard
            key={`${index} | ${author.name} | ${author.email}}`}
            name={author.name}
            email={author.email}
          />
        ))}
      </div>
    </>
  );
};

export default AuthorList;
