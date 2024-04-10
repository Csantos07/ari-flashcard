# README

This is our ReadMe file. This is where you can find out infromation about this flashcard app.

Here is an example of good readme's: [Example README](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)

## Getting Started

The Github Repo:
[FlashCard App](https://github.com/Csantos07/master-flashcard)

Qualified Assessment:
[Sam Vinick](https://www.qualified.io/assess/5f9c45c8262071000c341579/challenges/5f9c45c570e051000a3c00ab?invite=Z2X6rPnbFQqB8g)

- Clone the repo: `git clone <url>`
- Install:
`npm i`
- Start the app: `npm start`
---

## Routes
### API Routes
---
`http://localhost:8080/` --> Flashcard-o-matic JSON API

### React routes
---
`http://localhost:3000/` --> Home

`http://localhost:3000/decks/new` --> Create Deck

`http://localhost:3000/decks/:deckId` -->  Deck

`http://localhost:3000/decks/:deckId/edit` -->  Edit Deck

`http://localhost:3000/decks/:deckId/study` --> Study Deck

`http://localhost:3000/decks/:deckId/cards/new` -->  Add Card

`http://localhost:3000/decks/:deckId/cards/:cardId/edit` -->  Edit Card

---
<br/>
<br/>
<br/>


# Development
What are possible components we may need
  - Home                  [Created]
  - Decklist/Decks        [Created]
  - Deck                  [Created]
  - StudyDeck Component   [NOTCreated]
  - Cardlist/Cards        [Created]
  - Card                  [Created]
  - Create Card/Deck Forms[CreatedOneOfTwo]

## Goals

Next Goals?...
Tests up to date?

View
Study
Confirm!




### Queue
- Home
- Decks
- Create
- Study

# History/ChangeLog
I created a branch from carlo-implement-delete-deck-experimental
- [x] Refactored Create Deck to pass setDeck as a prop.
- [x] Delete Deck
- [x] Create Deck
- [x] Started Routes so we could do conditional rendering
- [x] Create a route to the home page?
- [x] First version of home page finished
- [x] Have all the decks displayed.
- [x] At this point my first goal is to render the home page.
- [x] Use the list util?


-----
Someting To Look Back On
```js
const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('Form submitted:', formData);

      let newDeck = await createDeck(formData);
      setDecks((prevDecks) => [...prevDecks, newDeck]);

      history.push('/');
    } catch (error) {
      console.error('Error creating deck:', error);
      // Handle the error as needed
    }
  };

```

VS:

```js
 const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    createDeck(formData);
    history.push('/');
  }
```
