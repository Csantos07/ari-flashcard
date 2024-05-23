import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Direct import without minified version
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// WIP
// There is some refactoring to do here.
// Right now this bread crumb is designed specifically for Study
// Linking still isn't perfect... just links to home page
function BreadCrumbTwo({ deck }) {
  const location = useLocation();
  const { deckId } = useParams();
  const { cardId } = useParams();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [crumbs, setCrumbs] = useState([]);
  const [path, setPath] = useState('');

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    let crumbBuild = [];
    if (pathnames.includes('study')) {
      // Study
      crumbBuild = [deck.name, capitalize(pathnames[2])];
      setPath(`/decks/${deckId}`);
    } else if (pathnames.includes('new') && !(pathnames.includes('cards'))) {
      // Creat Deck
      crumbBuild = ["Create Deck"];
    } else if (deckId && !(pathnames.includes('edit')) && !(pathnames.includes('cards'))) {
      // View Deck
      crumbBuild = [deck.name];
    } else if (pathnames.includes('edit') && !(pathnames.includes('cards'))) {
      // Edit Deck
      crumbBuild = [deck.name, "Edit Deck"];
      setPath(`/decks/${deckId}`);
    } else if (pathnames.includes('cards') && pathnames.includes('new')) {
      crumbBuild = [deck.name, "Add Card"];
      setPath(`/decks/${deckId}`);
    } else if (pathnames.includes('cards') && pathnames.includes('edit')) {
      crumbBuild = [deck.name, "Edit Card " + cardId];
      setPath(`/decks/${deckId}`);
    }

    setCrumbs(crumbBuild);
  }, [location, deck]);


  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" style={{ marginRight: "8px" }} />
              Home
            </Link>
          </li>
          {crumbs.map((crumb, index) => (
            index === crumbs.length - 1 ? (
              <li key={index} className="breadcrumb-item active" aria-current="page">
                {crumb}
              </li>
            ) : (
              <li key={index} className="breadcrumb-item">
                <Link to={path}>
                  {crumb}
                </Link>
              </li>
            )
          ))}
        </ol>
      </nav >
    </>
  );
}

export default BreadCrumbTwo;
