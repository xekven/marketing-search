import { BaseAction, actionIds, MarketingSearchQuery } from 'store/common';

export const numberRequestStartAction = (): BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_START,
  payload: null,
});



export const numberRequestCompletedAction = (
  numberGenerated: number
): BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_COMPLETED,
  payload: numberGenerated,
});

/* ================================================================= */

export const getMarketingData = (): BaseAction => ({
  type: actionIds.GET_ALL_MARKETING_DATA_REQUESTED,
  payload: null,
});

export const searchMarketingData = (query: MarketingSearchQuery): BaseAction => ({
  type: actionIds.SEARCH_MARKETING_DATA_REQUESTED,
  payload: query,
});