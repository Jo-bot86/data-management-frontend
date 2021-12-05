import React from 'react'
import { useParams } from 'react-router-dom'
import { useDataApi } from '../hooks/UseDataApi';
import Company from '../types/Company';
import CompanyForm from './CompanyForm'

export default function CompanyEdit() {
  const {id} = useParams<{id: string}>()
  const [company, setCompany] = useDataApi<Company>(id);

  if(!company){
    return <div>Company with this id does not exist</div>
  }
  return (
    <CompanyForm
      companyName={company.companyName}
      firstName={company.firstName}
      lastName={company.lastName}
      emailAddress={company.emailAddress}
      fax={company.fax}
      phone={company.phone}
      addressList={company.addressList ? company.addressList : [{street: "", country: "", city: "", postCode: "", addressType: ""}]}
      isEdit={true}
    />
  );
}
