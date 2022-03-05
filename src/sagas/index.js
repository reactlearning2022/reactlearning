import { all, fork } from 'redux-saga/effects';
import WatchLoginSaga from './login/watchLoginSaga';

function* RootSaga() {
    yield all([
      fork(WatchLoginSaga) ]);
    }
    
    export default RootSaga;
