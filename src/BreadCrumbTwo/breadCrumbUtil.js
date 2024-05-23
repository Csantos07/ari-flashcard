// breadcrumbUtils.js

export function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

export function generateBreadcrumbs(pathnames, deck, deckId, cardId) {
  const basePath = `/decks/${deckId}`;

  const breadcrumbsMap = {
    study: pathnames.includes('study') ? [
      { name: deck.name, path: basePath },
      { name: capitalize(pathnames[2]), path: `${basePath}/study` }
    ] : null,
    new: (pathnames.includes('new') && !pathnames.includes('cards')) ? [
      { name: "Create Deck", path: basePath }
    ] : null,
    view: (deckId && !pathnames.includes('edit') && !pathnames.includes('cards')) ? [
      { name: deck.name, path: basePath }
    ] : null,
    editDeck: (pathnames.includes('edit') && !pathnames.includes('cards')) ? [
      { name: deck.name, path: basePath },
      { name: "Edit Deck", path: `${basePath}/edit` }
    ] : null,
    addCard: (pathnames.includes('cards') && pathnames.includes('new')) ? [
      { name: deck.name, path: basePath },
      { name: "Add Card", path: `${basePath}/cards/new` }
    ] : null,
    editCard: (pathnames.includes('cards') && pathnames.includes('edit')) ? [
      { name: deck.name, path: basePath },
      { name: `Edit Card ${cardId}`, path: `${basePath}/cards/${cardId}/edit` }
    ] : null
  };

  // Filter out null values and return the first non-null breadcrumbs
  return Object.values(breadcrumbsMap).filter(Boolean)[0] || [];
}
