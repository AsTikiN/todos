export const appendTodo = (item) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TODO",
      payload: item,
    });
  };
};

export const removeTodo = (item) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: item,
    });
  };
};

export const changeFilter = (filter) => {
  return (dispatch) => {
    dispatch({
      type: "CHANGE_FILTER",
      payload: filter,
    });
  };
};

export const changeItemStatus = (newStatus) => {
  return (dispatch) => {
    dispatch({
      type: "CHANGE_ITEM_STATUS",
      payload: {
        index: newStatus.index,
        status: newStatus.status,
      },
    });
  };
};
