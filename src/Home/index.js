function Home({ decks }) {

  if (decks) {
    return (
      <>
        <button className="btn btn-primary">Create</button>

        <div className="card deck p-5">
          <h3>{decks[0].name}</h3>

          <p>{decks[0].description}</p>

          <div>
            <button className="btn btn-primary">View</button>
            <button className="btn btn-secondary">Study</button>
            <button className="btn btn-danger">Delete</button>
          </div>

        </div>
      </>

    )
  } else {
    return null;
  }

}

export default Home;
