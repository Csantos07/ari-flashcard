import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Decks from "./Deck/Decks";
import { listDecks } from "./utils/api";


/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function loadDeck() {
      const response = await listDecks();
      setDecks(response);
    }
    loadDeck();

  }, [])
  return (
    <div className="app-routes">
      <Layout />
    </div >
  );
}

export default App;
