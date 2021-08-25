import axios from 'axios';
import { MarketingData } from 'store/common';

const ROOT_URL = process.env.NODE_ENV === 'production' ? 'https://xekven.github.io/marketing-search' : '';

export const getMarketingData = async (): Promise<MarketingData[]> => {
  return await axios.get(`${ROOT_URL}/assets/data.json`);
};

