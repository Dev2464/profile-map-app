import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Dev Joshi",
      photo: require("./icons/channel-1.jpeg"),
      description: "Software Developer from Ahmedabad",
      address: "Ahmedabad",
    },
    {
      id: 2,
      name: "Jainam Soni",
      photo: require("./icons/channel-2.jpeg"),
      description: "Graphic Designer from Ahmedabad",
      address: "Ahmedabad",
    },
  ]);

  const [editingProfile, setEditingProfile] = useState(null);
  const [newProfile, setNewProfile] = useState({
    name: "",
    photo: "",
    description: "",
    address: "",
  });

  // Handle add, edit, and delete profile
  const handleAddProfile = () => {
    setProfiles([
      ...profiles,
      { id: Date.now(), ...newProfile },
    ]);
    setNewProfile({ name: "", photo: "", description: "", address: "" });
  };

  const handleEditProfile = () => {
    setProfiles(
      profiles.map((profile) =>
        profile.id === editingProfile.id ? editingProfile : profile
      )
    );
    setEditingProfile(null);
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };
  const handleViewDetails = (profile) => {
    setSelectedProfile(profile);
    navigate(`/profile-details`, { state: { profile } }); 
  };
  return (
    <div>
      <h1>Admin Dashboard (Manage Profiles)</h1>
      
      <div>
        <h2>{editingProfile ? "Edit Profile" : "Add Profile"}</h2>
        <input
          type="text"
          placeholder="Name"
          value={editingProfile ? editingProfile.name : newProfile.name}
          onChange={(e) =>
            editingProfile
              ? setEditingProfile({ ...editingProfile, name: e.target.value })
              : setNewProfile({ ...newProfile, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={editingProfile ? editingProfile.photo : newProfile.photo}
          onChange={(e) =>
            editingProfile
              ? setEditingProfile({ ...editingProfile, photo: e.target.value })
              : setNewProfile({ ...newProfile, photo: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={editingProfile ? editingProfile.description : newProfile.description}
          onChange={(e) =>
            editingProfile
              ? setEditingProfile({ ...editingProfile, description: e.target.value })
              : setNewProfile({ ...newProfile, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Address"
          value={editingProfile ? editingProfile.address : newProfile.address}
          onChange={(e) =>
            editingProfile
              ? setEditingProfile({ ...editingProfile, address: e.target.value })
              : setNewProfile({ ...newProfile, address: e.target.value })
          }
        />
        <button onClick={editingProfile ? handleEditProfile : handleAddProfile}>
          {editingProfile ? "Update Profile" : "Add Profile"}
        </button>
      </div>

      <div>
        <h2>Existing Profiles</h2>
        {profiles.map((profile) => (
          <div key={profile.id}>
             <ProfileCard key={profile.id} profile={profile}
            onViewDetails={handleViewDetails} />
            <button onClick={() => setEditingProfile(profile)}>Edit</button>
            <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
