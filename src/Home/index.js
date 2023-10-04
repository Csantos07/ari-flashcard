import DeckList from "../Decks/DeckList"

function Home({ decks }) {

  if (decks) {
    return (
      < DeckList decks={decks} />
    )
  } else {
    return null;
  }

}

export default Home;
