import { call, put, takeEvery } from 'redux-saga/effects';

import { http } from '../../utils/http-interceptor';
import { Storagehelper } from '../../utils/storage-helper';
import { AUTHENTICATE } from '../actions/actionTypes';
import * as actions from '../actions/Auth';

function authenticate(credentials) {
  return http.post('api/v1/auth/login', credentials);
}

function* authenticateUser(action) {
  try {
    const resp = yield call(authenticate, action.credentials);
    yield Storagehelper.setAccessToken(resp.data.result.token);
    yield Storagehelper.setUserData(resp.data.result);
    yield put(actions.authSuccess());
  } catch (error) {
    yield put(actions.authFailure());
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateUser);
}
