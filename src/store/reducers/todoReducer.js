const defaultState = {
  items: JSON.parse(window.localStorage.getItem("todoList")) || [],
  currentFilter: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_TODO":
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.payload),
          ...state.items.slice(action.payload + 1, state.items.length),
        ],
      };
    case "CHANGE_FILTER":
      return { ...state, currentFilter: action.payload };
    case "CHANGE_ITEM_STATUS":
      return {
        currentFilter: state.currentFilter,
        items: [
          ...state.items.slice(0, action.payload.index),
          Object.assign({}, state.items[action.payload.index], {
            status: action.payload.status,
          }),
          ...state.items.slice(action.payload.index + 1, state.items.length),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
