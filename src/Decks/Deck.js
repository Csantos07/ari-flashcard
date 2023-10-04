function Deck({ deck }) {
  return (
    <div className="card deck p-5">
      <div className="first-row d-flex justify-content-between">
        <h3>{deck.name}</h3>
        <span>{deck.cards.length} Cards</span>
      </div>

      <p>{deck.description}</p>

      <div className="third-rows">
        <button className="btn btn-primary">View</button>
        <button className="btn btn-secondary">Study</button>
        <button className="btn btn-danger">Delete</button>
      </div>

    </div >
  )
}

export default Deck;
