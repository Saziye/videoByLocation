import * as types from './actionTypes';

export const fetchVideoAction = (data) => {
    return {
        type: types.FETCH_VIDEO,
        payload: data
    }
}