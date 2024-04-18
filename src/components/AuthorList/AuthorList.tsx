import React, { useState, useEffect } from "react";
import { topAuthors } from "../../services/api.ts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AuthorCard from "../AuthorCard/AuthorCard";
import "./AuthorList.css";

type Author = {
  name: string;
  email: string;
  total_sales: string;
};

const AuthorList: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | undefined>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() =>{
    const fetchAuthors = async () => {

      setLoading(true);
      setErrorMsg("");

      const result = await topAuthors();
      if (result.success) {
        setAuthors(result.authors)
        setLoading(false);
      } else {
        setErrorMsg(result.message);
        setLoading(false);
      }
    }
    fetchAuthors();
  }, [])
  
  return (
    <>
      <div className="container">
        {errorMsg && <div className="error-info">{errorMsg}</div>}
        <div className="container-header">
          <ArrowBackIcon />
          <h4>You have Top 10 Authors</h4>
        </div>
        {!loading && authors.map((author, index) => (
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
