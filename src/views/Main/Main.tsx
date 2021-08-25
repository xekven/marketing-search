import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';


import { RootState } from 'store/reducers';
import { SearchResult, FilterParameters } from 'store/common';
import { getMarketingData, searchMarketingData } from 'actions';

import SearchForm from 'components/Main/SearchForm';
import LineChart from 'components/Main/LineChart';

import styles from './main.module.scss';




const Main: React.FC = () => {

  const dispatch = useDispatch();

  const result: SearchResult = useSelector((store: RootState ) => store.marketing.result);

  const { datasources, campaigns }: FilterParameters = useSelector((store: RootState ) => store.marketing.filterParameters);

  useMount(() => {
    dispatch(getMarketingData());
  })

  const handleSearch = useCallback(data => {
    dispatch(searchMarketingData(data));
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles['search-container']}>
        <SearchForm
          datasources={datasources}
          campaigns={campaigns}
          handleSearch={handleSearch}
        />

      </div>
      <div className={styles['result-container']}>
        <LineChart data={result} />
      </div>
    </div>
  )
};

export default Main;
