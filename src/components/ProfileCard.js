import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ userDetails, loading }) => {
  console.log(userDetails)

  if (loading) {
    return <h2>loading...</h2>
  }
  const renderedItem = userDetails.map((user, id) => {
    return (
      <div key={id} className="card">
        <div className="image-block">
          <img
            className="image-icon"
            alt={`Face of ${user.name}`}
            src={user.picture.large}
          />
          <section>
            Hi, I'm {user.name.first} {user.name.last}{" "}
          </section>
        </div>
        <div className="info-block">

          <h2>Profile</h2>  
          Username: {user.login.username} <br/> 
          Email: {user.email} <br/>
          Phone: {user.phone} <br/>
          Age: {user.dob.age} <br/>
          Location: {user.location.state}, {user.location.country} <br/>
        </div>
      </div>
    );
  });
  return <div>{renderedItem}</div>;
};

export default ProfileCard;
