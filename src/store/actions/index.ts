import { BaseAction, actionIds, MarketingSearchQuery } from 'store/common';

export const getMarketingData = (): BaseAction => ({
  type: actionIds.GET_ALL_MARKETING_DATA_REQUESTED,
  payload: null,
});

export const searchMarketingData = (query: MarketingSearchQuery): BaseAction => ({
  type: actionIds.SEARCH_MARKETING_DATA_REQUESTED,
  payload: query,
});