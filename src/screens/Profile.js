import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeHolderImage from "../assets/placeholder.svg";
const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const [location, setLocation] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setAvatar(URL.createObjectURL(file));
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    if (e.target.value !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="flex justify-center w-full items-center h-screen bg-white">
      <div className=" w-2/3 px-6 py-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-6">
          Welcome! Let's create your profile
        </h1>
        <p className="text-gray-600 mb-14">
          Let others get to know you better! You can do these later
        </p>

        <h2 className="text-lg font-semibold mb-3">Add an avatar</h2>
        <div className="mb-20 flex">
          <div className="flex justify-start border rounded-full w-36 h-36 overflow-hidden">
            <img
              src={avatar || placeHolderImage}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-start justify-center gap-4 mt-4 ml-8">
            <label
              htmlFor="avatar-upload"
              className="cursor-pointer border-2 rounded-md py-2 w-fit px-2"
            >
              Choose image
            </label>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <Link className="text-gray-500">
              <ChevronRightIcon className="text-gray-500" /> Or choose one of
              our defaults
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Add your location</h2>
          <input
            type="text"
            placeholder="Enter a location"
            value={location}
            onChange={handleLocationChange}
            className="w-full px-4 py-2 border-b border-gray-600 focus:outline-none"
          />
        </div>
        <Link to="/interests">
          <button
            disabled={disabled}
            className={`w-full ${
              !disabled ? "bg-pink-500" : "bg-pink-200"
            } text-white font-bold py-3 px-4 rounded-md`}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
