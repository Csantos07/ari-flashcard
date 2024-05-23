import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { generateBreadcrumbs } from "./breadCrumbUtil";


function BreadCrumbTwo({ deck }) {
  const location = useLocation();
  const { deckId, cardId } = useParams();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    if (deck) {
      const newCrumbs = generateBreadcrumbs(pathnames, deck, deckId, cardId);
      setCrumbs(newCrumbs);
    }
  }, [location, deck, deckId, cardId, pathnames]);

  return (
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
              {crumb.name}
            </li>
          ) : (
            <li key={index} className="breadcrumb-item">
              <Link to={crumb.path}>
                {crumb.name}
              </Link>
            </li>
          )
        ))}
      </ol>
    </nav>
  );
}

export default BreadCrumbTwo;
