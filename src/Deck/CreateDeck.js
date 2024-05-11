import BreadCrumb from "../BreadCrumb";
import React, { useState } from "react";
import { createDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

function CreateDeck({ addDeck }) {
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });
  const history = useHistory();


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newDeck = await createDeck(formData);
    addDeck(newDeck);
    history.push("/");
  };

  const handleCancel = () => {
    // Handle cancel action here
    history.push("/");
  };

  return (
    <>
      {/* <BreadCrumb /> */}
      <h2>Create Deck</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mr-2">Submit</button>
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
      </form>
    </>

  );
}

export default CreateDeck;
