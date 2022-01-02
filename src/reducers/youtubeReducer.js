import * as types from '../actions/actionTypes';

const initialState = {
  videos: [],
  nextPage: null,
  loading: false,
  error: null,
};

function reducer(state = initialState, action) {
  console.log(state.videos?.items,state.videos.items?.length);
  switch (action.type) {
    case types.FETCH_VIDEO_SUCCESS:
      return {...state, loading: false, videos: state.videos.concat(action.response.items), nextPage:action.response.nextPageToken};
    case types.FETCH_VIDEO_ERROR:
      return {...state, loading: false, error: action.response};
    default:
      return {...state, loading: true, error: null};
  }
}

export default reducer;
