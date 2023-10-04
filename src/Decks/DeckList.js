import Deck from './Deck';
function DeckList({ decks }) {

  return (
    <>
      <button className="btn btn-primary">Create</button>
      {decks.map((deck, index) => <Deck key={index} deck={deck} />)}
    </>

  )
}

export default DeckList;
