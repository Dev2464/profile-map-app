import React from "react";
import { useLocation } from "react-router-dom";
import MapComponent from "../components/MapComponent";

const ProfileDetails = () => {
  const { state } = useLocation();
  const profile = state?.profile;

  if (!profile) {
    return <div>No profile data available.</div>;
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <img src={profile.photo} alt={`${profile.name}'s avatar`} />
      <p>{profile.description}</p>
      <p>Address: {profile.address}</p>
      <MapComponent address={profile.address} />
    </div>
  );
};

export default ProfileDetails;
