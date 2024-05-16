* Delete a card
  - Will need to continue the prop drilling aproach
  - This should continue happening in the view deck workflow...
  - we will want the cards to rerender ... do we need to create state for card?
  - Will we want the deleteCard to happen in layout or viewDeck

- Reusable components for the forms?
- Edit/update deck and cards?

---

## At this point
- [x] Created components for Cards and Card... refactored ViewDeck to use these components

- [x] We can Create Cards within the deck

- [x] Delete Deck
  - [ ] I am currently passing down a removeDeck
        property that is a function. The remove deck is defined in the Layout component.
        Passed through Layout to Home to Decks to Deck. From Layout to ViewDeck.
  - [ ] Does this implicitly delete the cards?
- [x] Created the ability to Create Decks
- [ ] Consider a reusable form for create and edit

[x] I can View a deck and all the cards contained within

[x] Start to leave breadcrumbs

- [x] I will create bread crumbs in its own folder
- [x] I created a semifunctional bread crumb component
  - Works best for study workflow
- [ ] I will return to the full Impementation of this

- [x] At this point I can study decks...
  - go through cards
  - flip cards
  - restart cards
