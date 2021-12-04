import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDataApi } from '../hooks/UseDataApi';
import { companyApi } from '../shared/CompanyApi';
import Company from '../types/Company';

export default function CompanyDetail() {
  const { id } = useParams<{ id: string }>();
  const [company] = useDataApi<Company>(id);
  const history = useHistory();

  const deleteCompany = (id: string): void => {
    console.log(id)
    companyApi<Company>('DELETE', `/companies/${id}`, onShowList);
  };

  const editCompany = (id: string) => {
    history.push(`/companies/${id}/edit`)
  }

  if (!company || company.deleted) {
    return <div>loading</div>;
  }


  const onShowList = () => {
    history.push('/companies');
  };

  return (
    <div className='container'>
      <h1 className='text-center'>{company.companyName}</h1>
      <div className='row justify-content-center'>
        <div className='col-6'>
          <div className='card mb-3 mx-auto' style={{ width: '18rem' }}>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <b>First Name:</b> {company.firstName}
              </li>
              <li className='list-group-item'>
                <b>Last Name:</b> {company.lastName}
              </li>
              <li className='list-group-item'>
                <b>Email:</b> {company.emailAddress}
              </li>
              <li className='list-group-item'>
                <b>Company No:</b> {company.companyNr}
              </li>
              <li className='list-group-item'>
                <b>Phone:</b> {company.phone}
              </li>
              <li className='list-group-item'>
                <b>Fax:</b> {company.fax}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-4'></div>
        <div className='col text-center'>
          <button className='btn btn-primary' type='submit' onClick={() => editCompany(id)}>
            Edit
          </button>
          <button className='btn btn-warning ms-3' onClick={onShowList}>
            Back
          </button>
          <button
            className='btn btn-danger ms-3'
            onClick={() => deleteCompany(id)}
          >
            Delete
          </button>
        </div>
        <div className='col-4'></div>
      </div>
    </div>
  );
}
