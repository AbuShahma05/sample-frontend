import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [user, setUser] = useState({ name: "", email: "", age: "" });
  const [error, setError] = useState("");
  
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch user details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const BASE_URL = "https://sample-backend-35vh.onrender.com";
        const { data } = await axios.get(`${BASE_URL}/users/${id}`);
        setUser(data);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch user");
      }
    };
    fetchUser();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Update user details
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const BASE_URL = "https://sample-backend-35vh.onrender.com";
      await axios.patch(`${BASE_URL}/users/${id}`, user);
      navigate("/all"); // Redirect after update
    } catch (err) {
      setError(err.response?.data?.error || "Failed to update user");
    }
  };

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}

      <h2 className="text-center">Edit User</h2>

      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default Update;
