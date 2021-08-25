import { MarketingData, FilterParameters } from 'store/common';
// O (n)
export default function indexFilterParameters (entries: MarketingData[]) : FilterParameters {
  const campaigns = {};
  const datasources = {};

  entries.forEach(entry => {
    const {campaign, datasource } = entry;

    if (!campaigns[campaign]) {
      campaigns[campaign] = true;
    }

    if (!datasources[datasource]) {
      datasources[datasource] = true;
    }

  })

  return { campaigns: Object.keys(campaigns), datasources: Object.keys(datasources) };
}