import { call, put, select, takeLatest } from 'redux-saga/effects';

//--- Begin: Saga main Action Watcher generator function
function* WatchLoginSaga() {
    yield takeLatest('GET_EU_POSTS_LIST', workerLogin);
}

const workerLogin = () => {
    
}

export default WatchLoginSaga;