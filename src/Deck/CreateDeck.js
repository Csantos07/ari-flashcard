import BreadCrumb from "../BreadCrumb";
import React, { useState } from "react";
import { createDeck } from "../utils/api";
import { useHistory } from "react-router-dom";
import DeckForm from "./DeckForm";
import BreadCrumbTwo from "../BreadCrumbTwo";

function CreateDeck({ addDeck }) {
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

  const handleSubmit = async (formData) => {
    const newDeck = await createDeck(formData);
    addDeck(newDeck);
  };

  // Rename this variable to something more descriptive because it's not just for canceling at this point

  let routeTo = "/";

  return (
    <>
      {/* <BreadCrumb /> */}
      <BreadCrumbTwo />
      <h2>Create Deck</h2>

      <DeckForm deck={formData} submitDeck={handleSubmit} routeTo={routeTo} />
    </>

  );
}

export default CreateDeck;
