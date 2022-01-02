import {put, call} from 'redux-saga/effects';
import {fetchVideosService} from '../services';
import * as types from '../actions/actionTypes';

export function* youtubeSaga(payload) {
  try {
    const response = yield call(fetchVideosService, payload);
    yield put({type: types.FETCH_VIDEO_SUCCESS, response});
  } catch (error) {
    yield put({type: types.FETCH_VIDEO_ERROR, error});
  }
}
