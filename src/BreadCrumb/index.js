import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Direct import without minified version
import { readDeck } from "../utils/api";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// WIP
// There is some refactoring to do here.
// Right now this bread crumb is designed specifically for Study
// Linking still isn't perfect... just links to home page
function BreadCrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const { deckId } = useParams()
  const [deck, setDeck] = useState("");
  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }

    loadDeck();

  }, []);


  useEffect(() => {
    let path = [deck.name, pathnames[2]]; // added optional chaining here
    // let path = [deck[pathnames[1]]?.name, capitalize(pathnames[2])];
    setCrumbs(path);
  }, [deck]);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      {console.log(`Crumbs! ${crumbs}`)}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" style={{ marginRight: "8px" }} />
              Home
            </Link>
          </li>
          {crumbs.map((crumb, index) => (
            <li className="breadcrumb-item">

              {/* When I click on deck name in the bread crumb
                    I should navigate to the view page of the deck
                */}
              {/* Route should be dynamically created */}
              <Link to="/">
                {crumb}
              </Link>
            </li>
          ))}
        </ol>
      </nav >
    </>
  );
}

export default BreadCrumb;
