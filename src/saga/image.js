import { call, put,  takeLatest } from 'redux-saga/effects';

import { getImageData } from '../api/image';
import { getImageFromApiSuccess } from '../actions/image';

function* getListImageSaga(action) {
  try {
    console.log("log action in saga", action);
    const res = yield call(getImageData, action);
    const images = res.data.data;
    yield put(getImageFromApiSuccess(images));
  } catch (error) {
    console.log(error);
  }
}

function* imageSaga() {
  yield takeLatest('GET_IMAGE_FROM_API', getListImageSaga);
}

export default imageSaga;