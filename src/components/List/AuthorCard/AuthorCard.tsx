import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import avator from "../../../assets/avatar.png";
import "./AuthorCard.css";

interface AuthorCardProps {
  name: string;
  email: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ name, email }) => {
  return (
    <>
      <div className="container-card">
        <div className="container-card-info">
          <img
            className="container-card-img"
            src={avator}
            alt="profile pciture"
          />
          <div className="container-card-contact-info">
            <div className="container-card-name">{name}</div>
            <div className="container-card-email">{email}</div>
          </div>
        </div>
        <CancelIcon color="disabled"/>
      </div>
    </>
  );
};

export default AuthorCard;
