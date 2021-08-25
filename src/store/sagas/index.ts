import { all, fork, } from 'redux-saga/effects';
import { watchNewGetMarketingDataStart } from './marketingSagas';

export const rootSaga = function* root() : Generator<any> {
  yield all([fork(watchNewGetMarketingDataStart)]);
};
