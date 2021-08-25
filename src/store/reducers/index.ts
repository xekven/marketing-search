import { combineReducers } from 'redux';

import {
  MarketingDataState,
  marketingDataReducer,
} from './marketing-data.reducer';

export interface RootState {
  marketing: MarketingDataState;
}

export const rootReducers = combineReducers<RootState>({
  marketing: marketingDataReducer
});