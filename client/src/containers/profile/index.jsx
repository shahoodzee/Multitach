import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import EditProfile from "../../components/profile/edit";
import RemoveProfile from "../../components/profile/remove";
import DefaultAvatar from "../../images/Default Avatar.jpg";
import axios from "axios";
import Cookies from "js-cookie";

const Profile = () => {
  const [user, setUser] = useState({});
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserData();
  }, []);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const handleSave = async (editedUser) => {
    try {
      const jwt = Cookies.get("token");
      await axios.put(
        "http://127.0.0.1:8000/api/update/client/",
        {
          user: editedUser,
        },
        { params: { jwt } }
      );

      setUser(editedUser);
      console.log("User data updated successfully!");
      setSelectedTab(0);
      window.location.reload();
    } catch (error) {
      console.error("Error updating user data:", error.message);
    }
  };

  const loadUserData = async () => {
    try {
      const jwt = Cookies.get("token");
      const res = await axios.get("http://127.0.0.1:8000/api/profile/client/", {
        params: {
          jwt,
        },
      });

      setUser(res.data.data.user);
      setLoading(false);
      console.log("data from backend", res.data);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="user-profile p-8 rounded-md flex flex-col md:flex-row md:items-center">
          <div className="md:mr-8">
            <h2 className="text-3xl font-bold text-white">{user.username}</h2>
            <p className="text-gray-400">Email: {user.email}</p>
            <p className="text-gray-400">CNIC: {user.cnic || "N/A"}</p>
          </div>

          <img
            src={DefaultAvatar}
            alt="Profile Picture"
            className="rounded-full h-20 w-20 object-cover md:h-32 md:w-32 ml-auto"
          />
        </div>
      )}

      <div className="flex flex-col justify-center mt-4 md:mt-0">
        <Tabs
          selectedIndex={selectedTab}
          onSelect={handleTabChange}
          className="p-4 rounded-md"
        >
          <TabList className="flex mb-4 justify-center">
            <Tab className="cursor-pointer bg-gray-600 px-4 py-2 rounded-md mr-4">
              Activity
            </Tab>
            <Tab className="cursor-pointer bg-gray-600 px-4 py-2 rounded-md mr-4">
              Edit Profile
            </Tab>
            <Tab className="cursor-pointer bg-red-950 text-red-300 px-4 py-2 rounded-md">
              Delete Account
            </Tab>
          </TabList>

          {/* ... (rest of your JSX) */}
        </Tabs>
      </div>
    </div>

  );
};

export default Profile;
