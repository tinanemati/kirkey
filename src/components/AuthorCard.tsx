import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import avator from "../assets/avatar.png";
import "./AuthorCard.css";

const AuthorCard: React.FC = () => {
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
            <div className="container-card-name">Jenny Appleseed</div>
            <div className="container-card-email">
              jenny.appleseed@example.com
            </div>
          </div>
        </div>

        <CancelIcon color="action" />
      </div>
    </>
  );
};

export default AuthorCard;
