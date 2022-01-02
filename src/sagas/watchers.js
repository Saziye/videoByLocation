
import { takeLatest } from 'redux-saga/effects';
import { youtubeSaga } from './youtubeSaga';

import * as types from '../actions/actionTypes';


export default function* watchFetchVideos() {
  yield takeLatest(types.FETCH_VIDEO, youtubeSaga);
}