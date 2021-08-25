import { put, takeLatest, call, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import isEqual from 'lodash/isEqual';

import { getMarketingData } from 'store/api';
import searchMarketingData from 'utilities/searchMarketingData';
import indexFilterParameters from 'utilities/indexFilterParameters';

import {
  actionIds,
  BaseAction,
  MarketingData,
  MarketingSearchQuery,
  SearchResult,
  FilterParameters
} from 'store/common';

export function* watchNewGetMarketingDataStart() : Generator<any> {
  // GET MARKETING DATA
  yield takeLatest(
    actionIds.GET_ALL_MARKETING_DATA_REQUESTED,
    getMarketingDataSaga
  );
  // FILTER MARKETING DATA HERE
  yield takeLatest(
    actionIds.SEARCH_MARKETING_DATA_REQUESTED,
    searchMarketingDataSaga
  );
}

function* getMarketingDataSaga(): any  {

  try {
    const response: AxiosResponse = yield call(getMarketingData);

    yield put({
      type: actionIds.GET_ALL_MARKETING_DATA_SUCCEEDED,
      payload: response.data
    });

    // calculate all possible filter options
    const indexedFilterParameters: FilterParameters = yield call(indexFilterParameters, response.data);
    
    yield put({
      type: actionIds.SET_FILTER_PARAMETERS,
      payload: indexedFilterParameters
    });
    // search first time, so something should be shown in chart
    yield* searchMarketingDataSaga({ type: '', payload: {}});
  } catch ({ message }) {
    yield put({
      type: actionIds.GET_ALL_MARKETING_DATA_FAILED,
      payload: message
    });
    // add error notification here
  }
}

function* searchMarketingDataSaga(action: BaseAction): any  {

  try {

    // should be checking here if there are any blocking conditions

    const query : MarketingSearchQuery = action.payload;

    const oldQuery: MarketingSearchQuery = yield select(store => store.marketing.query);

    if (!isEqual(oldQuery, query)) {
      const marketingData: MarketingData[] = yield select(store => store.marketing.data);

      const result: SearchResult = yield call(searchMarketingData, marketingData, query);

      yield put({
        type: actionIds.SEARCH_MARKETING_DATA_SUCCEEDED,
        payload: { query, result }
      });
    } else {
      console.warn('Multiple search detected! :P')
    }

   
  } catch ({ message }) {
  
    yield put({
      type: actionIds.SEARCH_MARKETING_DATA_FAILED,
      payload: message
    });
    // add error notification here
  }
}
