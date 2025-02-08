import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Read = () => {
  const [data, setData] = useState([]); // Stores fetched users
  const [error, setError] = useState(""); // Stores error message
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch all users
  const getData = useCallback(async () => {
    try {
      const BASE_URL = "https://sample-backend-35vh.onrender.com";
      const { data } = await axios.get(`${BASE_URL}/users`); // Axios GET request
      setData(data);
      setError("");
    } catch (error) {
      setError(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  // Delete a user
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return; // Exit if user cancels
  
    try {
      const BASE_URL = "https://sample-backend-35vh.onrender.com";
      await axios.delete(`${BASE_URL}/users/${id}`);
      setData((users) => users.filter((user) => user._id !== id)); // Remove deleted user from UI
    } catch (error) {
      setError(error.response?.data?.error || "Failed to delete user");
    }
  };
  
  useEffect(() => {
    getData(); // Fetch data when component loads
  }, []);
  

  return (
    <div className="container my-4">
      {error && <div className="alert alert-danger">{error}</div>}

      <h2 className="text-center mb-4">User List</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="row">
          {data.length > 0 ? (
            data.map(({ _id, name, email, age }) => (
              <div key={_id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle text-muted">{email}</h6>
                    <p className="text-muted">Age: {age}</p>
                    <div className="d-flex justify-content-between">
                      <Link to={`/update/${_id}`} className="btn btn-primary btn-sm">
                        Edit
                      </Link>
                      <button onClick={() => handleDelete(_id)} className="btn btn-danger btn-sm">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No users found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Read;
