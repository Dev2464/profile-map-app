import React, { useState } from "react";
import { useHref, useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import SearchFilter from "../components/SearchFilter";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate();

  // Mock profiles data
  const profiles = [
    {
      id: 1,
      name: "Dev joshi",
      photo: "./icons/channel-1.jpeg",
      description: "Software Developer from Ahmedabad",
      address: "Ahmedabad",
    },
    {
      id: 2,
      name: "Jainam Soni",
      photo: "./icons/channel-2.jpeg",
      description: "Graphic Designer from ahmedabad",
      address: "Ahmedabad",
    },
  ];

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleViewDetails = (profile) => {
    setSelectedProfile(profile); // Save the selected profile
    navigate(`/profile-details`, { state: { profile } }); // Navigate to details page
  };
  return (
    <div>
      <h1>Profiles</h1>
      <SearchFilter setSearchQuery={setSearchQuery} />
      <div>
        {filteredProfiles.map((profile) => (
         <ProfileCard key={profile.id} profile={profile}
         onViewDetails={handleViewDetails} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
