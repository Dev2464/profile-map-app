import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      name: "John Doe",
      photo: "https://via.placeholder.com/100",
      description: "Software Developer from New York",
      address: "New York, NY",
    },
    {
      id: 2,
      name: "Jane Smith",
      photo: "https://via.placeholder.com/100",
      description: "Graphic Designer from Los Angeles",
      address: "Los Angeles, CA",
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
