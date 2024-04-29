import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api";

function Layout() {

  // console.log(listDecks());
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function loadDeck() {
      const response = await listDecks();
      setDecks(response);
    }
    loadDeck();

  }, [])

  if (decks.length > 0) {
    return (
      <>
        <Header />
        <div className="container">
          {/* TODO: Implement the screen starting here */}
          <button>Create Deck</button>

          <section className="card">
            <h4>{decks[0].name}</h4>
            <p>lorem ispusmlkjdslkajdfl;kja;lsdkfj;lajdl;f</p>
            <button className="bg-secondary">View</button>
            <button className="bg-primary">Study</button>
            <button className="bg-danger">Delete</button>
          </section>
          <NotFound />
        </div>
      </>
    );
  } else {
    return null;
  }

}

export default Layout;
