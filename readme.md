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
  - Home
  - Decklist/Decks
  - Deck
  - StudyDeck Component
  - Cardlist/Cards
  - Card
  - Create Card/Deck Forms

## Goals
At this point my next goal is to be able to create a deck...

When i click on create deck
- I should be routed to a form to create a deck

```CREATE DECK
Name:
----------
Deck Name |
----------


Description:
--------------------
Brief Description   |
--------------------

----------------
Cancel | Submit |
----------------
```

I'm debating between that and ...
- study
- view

### Queue
- Home
- Decks
- Create
- Study

# History/ChangeLog
- [x] Started Routes so we could do conditional rendering
- [x] Create a route to the home page?
- [x] First version of home page finished
- [x] Have all the decks displayed.
- [x] At this point my first goal is to render the home page.
- [x] Use the list util?

