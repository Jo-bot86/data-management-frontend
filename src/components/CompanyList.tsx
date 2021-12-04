import React from 'react';
import axios, { AxiosResponse } from 'axios';
import CompanyItem from './CompanyItem';
import Company from '../types/Company';
import { useDataApi } from '../hooks/UseDataApi';
import { useHistory } from 'react-router-dom';

export default function CompanyList() {
  const [companies] = useDataApi<Company[]>();
  const history = useHistory();

  if (!companies) {
    return (
      <div className='d-flex justify-content-center my-5 py-5'>
        <div className='spinner-border' role='status'>
          <span className='sr-only align-self-center'>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className='m-4'>
      <div className='row'>
        {companies.map(
          (company) =>
            !company.deleted && (
              <CompanyItem key={company.id} company={company} />
            )
        )}
      </div>
    </div>
  );
}
