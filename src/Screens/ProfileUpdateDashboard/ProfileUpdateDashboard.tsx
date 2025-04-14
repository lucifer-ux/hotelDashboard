import Navbar from "../../Components/Navbar/Navbar";
import SearchBox from "../../Components/SearchBox/SearchBox";
import SearchTable from "../../Components/SearchTable/SearchTable";
import ToggleButton from "../../Components/ToggleButton/ToggleButton";
import UserForm from "../../Components/UserForm/UserForm";
import "./ProfileUpdateDashboard.css";
import { useState } from "react";

const mockData = [
  { Name: "Alice", ID: "A123", Mobile: "1234567890" },
  { Name: "Bob", ID: "B456", Mobile: "9876543210" },
  { Name: "Charlie", ID: "C789", Mobile: "5555555555" },
];
const fields = [
  { label: "Name", name: "name", placeholder: "Enter full name" },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter email address",
  },
  { label: "Phone", name: "phone", placeholder: "Enter phone number" },
];

const ProfileUpdateDashboard = () => {
  const [filteredData, setFilteredData] = useState<typeof mockData>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [formData, setFormData] = useState({});
  const [newUserToggle, setNewUserToggle] = useState(false);

  const handleSearch = (query: string, filter: "Name" | "ID" | "Mobile") => {
    const matches = mockData.filter((item) =>
      item[filter].toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(matches);
    setSuggestions(matches.map((item) => item[filter]));
  };

  const handleToggleClick = () => {
    setNewUserToggle(!newUserToggle);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log("newdatasubmitted", formData);
  };

  return (
    <>
      <div className="profileDashboardContainer">
        <Navbar />
        <div className="toggleButtonContainer">
          <ToggleButton
            firstToggleText="Existing Users"
            secondToggleText="Add New Users"
            onClick={handleToggleClick}
            isToggleButtonActive={newUserToggle}
          />
          {!newUserToggle&&<div className="searchbarconainer">
            <SearchBox
              onSearch={handleSearch}
              suggestions={suggestions}
              filterOptions={["Name", "ID", "Mobile"]}
            />
            <SearchTable data={filteredData} />
          </div>}
        </div>
        <div>
          {newUserToggle && <UserForm
            fields={fields}
            formData={formData}
            onChange={handleChange}
            handleSubmit={handleSubmit}
          />}
        </div>
      </div>
    </>
  );
};

export default ProfileUpdateDashboard;
