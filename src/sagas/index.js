import { fork } from 'redux-saga/effects';
import watchFetchVideos from './watchers';

export default function* startForman() {
  yield fork(watchFetchVideos);
}