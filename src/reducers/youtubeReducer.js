import * as types from '../actions/actionTypes';

const initialState = {
  videos: [],
  loading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_VIDEO_SUCCESS:
      return {...state, loading: false, videos: action.response};
    case types.FETCH_VIDEO_ERROR:
      return {...state, loading: false, error: action.response};
    default:
      return {...state, loading: true, error: null};
  }
}

export default reducer;
