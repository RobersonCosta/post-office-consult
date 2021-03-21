export function getView(width) {
  let newView = 'mobile';
  if (width > 767) newView = 'desktop';
  return newView;
}


export function updateView() {
  return dispatch => {
    let newView = 'desktop';
    if (__isBrowser__) newView = getView(window.innerWidth);

    dispatch({
      type: "UPDATE_VIEW",
      payload: {
        newView: newView
      }
    })
  }
}