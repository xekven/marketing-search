import { MarketingData, SearchResult, MarketingSearchQuery, ResultEntity } from 'store/common';

export default function searchMarketingData (entries: MarketingData[], query: MarketingSearchQuery) : SearchResult  {
  const output: Record<string, ResultEntity> = {};

  entries.forEach(entry => {
    // if matches our search criteria
    const campaignMatch = !query.campaigns || query.campaigns.length === 0 || query.campaigns.includes(entry.campaign);
    const datasourceMatch = !query.datasources || query.datasources.length === 0 || query.datasources.includes(entry.datasource);
    if (campaignMatch && datasourceMatch) {

      const entryClicks = +entry.clicks;
      const entryImpressions = +entry.impressions;
      // if already exists
      if (output[entry.date]) {
        const currentValue = output[entry.date];
        currentValue.clicks = currentValue.clicks + entryClicks;
        currentValue.impressions = currentValue.impressions + entryImpressions;
      } else {
        output[entry.date] = { clicks: entryClicks, impressions: entryImpressions};
      }
    }
   
  })


  
  return Object.entries(output).map(([date, { clicks, impressions }]) => ({ date, clicks, impressions }))
}