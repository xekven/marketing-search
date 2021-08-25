export const actionIds = {
  GET_NUMBER_REQUEST_START:
    '[0] Request a new number to the NumberGenerator async service.',
  GET_NUMBER_REQUEST_COMPLETED:
    '[1] NumberGenerator async service returned a new number.',
  // GET DATA
  GET_ALL_MARKETING_DATA_REQUESTED:
    'GET_ALL_MARKETING_DATA_REQUESTED',
  GET_ALL_MARKETING_DATA_SUCCEEDED:
    'GET_ALL_MARKETING_DATA_SUCCEEDED',
  GET_ALL_MARKETING_DATA_FAILED:
    'GET_ALL_MARKETING_DATA_FAILED',
  // SEARCH DATA
  SEARCH_MARKETING_DATA_REQUESTED:
    'SEARCH_MARKETING_DATA_REQUESTED',
  SEARCH_MARKETING_DATA_SUCCEEDED:
    'SEARCH_MARKETING_DATA_SUCCEEDED',
  SEARCH_MARKETING_DATA_FAILED:
    'SEARCH_MARKETING_DATA_FAILED',
  // FILTER PARAMS
  SET_FILTER_PARAMETERS:
    'SET_FILTER_PARAMETERS',
};

export interface BaseAction {
  type: string;
  payload: any;
}


export interface MarketingData {
  date: string,
  datasource: string,
  campaign: string,
  clicks: number,
  impressions: number,
}

export type MarketingSearchQuery = FilterParameters;

export type ResultEntity = {
  clicks: number,
  impressions: number
}

export type FilterParameters = {
  datasources?: string[],
  campaigns?: string[]
}

export type SearchResult = Array<{ date: string } & ResultEntity>;