import React from 'react';
import CompanyForm from './CompanyForm';

export default function CompanyCreate() {
  return (
    <CompanyForm
      companyName=''
      firstName=''
      lastName=''
      emailAddress=''
      fax=''
      phone=''
      addressList={[{street: "", country: "", city: "", postCode: "", addressType: ""}]}
      isEdit={false}
    />
  );
}
