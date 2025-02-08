import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importing Axios

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addUser = { name, email, age };

    try {
      // Axios automatically handles JSON stringification
      // const response = await axios.post("http://localhost:3000/users", addUser);
      const BASE_URL = "https://sample-backend-35vh.onrender.com";
      const response = await axios.post(`${BASE_URL}/users`, addUser);

      console.log(response.data);

      setName("");
      setEmail("");
      setAge(0);
      navigate("/read"); // Redirect after successful creation
    } catch (err) {
      // Axios handles errors better; we'll use a clearer error message
      console.error(err.response?.data?.error || "Something went wrong!");
      setError(err.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div className="container my-2">

      {/* Error handling */}
      {error ? <div className="alert alert-danger">{error}</div> : null}

      <h2 className="text-center">Enter the data</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
