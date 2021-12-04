import React, {useState} from 'react';
import Company from '../types/Company';
import '../index.css';
import { useHistory } from 'react-router-dom';

interface Props {
  company: Company;
}

export default function CompanyItem(props: Props) {
  const { company } = props;
  const history = useHistory()

  return (
    <div className={'col-4 d-flex'} onClick={() => history.push(`/companies/${company.id}`)}>
      <div className='card mb-3 company-item' style={{ width: '30rem' }}>
        <div className='card-body'>
          <div className='card-title fw-bold fs-4'>{company.companyName}</div>
        </div>
      </div>
    </div>
  );
}
