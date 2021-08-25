import axios from 'axios';
import { MarketingData } from 'store/common';

export const getMarketingData = async (): Promise<MarketingData[]> => {
  return await axios.get('/assets/data.json');
};

