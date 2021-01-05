import TYPES from '../actions/types';

const initialState = {
  entities: [],
};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.LOAD_ENTITIES:
      return {
        ...state,
        entities: actions.entities,
      };
    case TYPES.ADD_BOOKMARK:
      return {
        ...state,
        favourites: state.favourites.map((fav) => {
          if (fav.id == actions.bookmark.which) {
            fav.bookmarks.unshift(actions.bookmark);
            return {
              ...fav,
            };
          }
          return fav;
        }),
      };
    case TYPES.DELETE_BOOKMARK:
      return {
        ...state,
        favourites: state.favourites.map((fav) => {
          fav.bookmarks = fav.bookmarks.filter(
            (f) => f.name != actions.page.name && f.url != actions.page.url,
          );
          return fav;
        }),
      };
    default:
      return state;
  }
};
export default reducer;
