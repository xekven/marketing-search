import {
  BaseAction,
  actionIds,
  MarketingSearchQuery,
  MarketingData,
  FilterParameters,
  SearchResult
} from 'store/common';

export type NumberCollectionState = number[];



export type MarketingDataState = {
  fetched: boolean,
  inProgress: boolean,
  error: string | null,
  query: MarketingSearchQuery,
  result: SearchResult,
  data: MarketingData[],
  filterParameters: FilterParameters
}

const defaltQuery: MarketingSearchQuery = {
  datasources: undefined,
  campaigns: undefined
};

const initialState: MarketingDataState  = {
  fetched: false,
  inProgress: false,
  error: null,
  query: defaltQuery,
  result: [],
  data: [], 
  filterParameters: {}
}

// immerjs would be good addition here
export const marketingDataReducer = (
  state: MarketingDataState = initialState,
  action: BaseAction
) : MarketingDataState => {
  switch (action.type) {

  /* GET DATA */
  case actionIds.GET_ALL_MARKETING_DATA_REQUESTED:
    return { ...state, inProgress: true };
  case actionIds.GET_ALL_MARKETING_DATA_SUCCEEDED:
    // if data is fetched second time, in real case it may be not the same, therefor clear all query & result stuff
    return { ...state, inProgress: false, data: action.payload, fetched: true, error: null, query: defaltQuery, result: [] };

  /* SEARCH DATA */
  case actionIds.SEARCH_MARKETING_DATA_REQUESTED:
    return { ...state, inProgress: true };
  case actionIds.SEARCH_MARKETING_DATA_SUCCEEDED:
    return { ...state, inProgress: false, query: action.payload.query, result: action.payload.result };
  case actionIds.SET_FILTER_PARAMETERS:
    return { ...state, filterParameters: action.payload };

  /* FAIL CASE */
  case actionIds.GET_ALL_MARKETING_DATA_FAILED:
  case actionIds.SEARCH_MARKETING_DATA_FAILED:
    return { ...state, inProgress: false, data: [], fetched: true, error: action.payload, query: defaltQuery, result: [] };
  default: 
    return state;
  }
}