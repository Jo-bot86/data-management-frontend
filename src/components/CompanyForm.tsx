import React, { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  companyName: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  fax: string;
  phone: string;
  address: string[];
}

export default function CompanyForm(props: Props) {
  const [company, setCompany] = useState({
    companyName: props.companyName,
    firstName: props.firstName,
    lastName: props.lastName,
    phone: props.phone,
    fax: props.fax,
    emailAddress: props.emailAddress,
    address: props.address,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    setCompany((currCompany) => ({ ...currCompany, [key]: e.target.value }));
  };

  /*  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e.currentTarget.companyName.value);
    e.preventDefault();
  }; */

  return (
    <form
      // onSubmit={handleSubmit}
      className='needs-validation'
      style={{ margin: '2em' }}
    >
      <div className='row'>
        <div className='col'>
          <label className='form-label' htmlFor='company-name'>
            Company Name
          </label>
          <input
            id='company-name'
            className='form-control mb-4'
            type='text'
            name='companyName'
            value={company.companyName}
            onChange={(e) => handleChange(e, 'companyName')}
            required
          />
          <div className='valid-feedback'>Looks good!</div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <label className='form-label' htmlFor='first-name'>
            First Name
          </label>
          <input
            id='first-name'
            className='form-control mb-4'
            type='text'
            name='firstName'
            value={company.firstName}
            onChange={(e) => handleChange(e, 'firstName')}
            required
          />
          <div className='valid-feedback'>Looks good!</div>
        </div>
        <div className='col'>
          <label className='form-label' htmlFor='last-name'>
            Last Name
          </label>
          <input
            id='last-name'
            className='form-control mb-4'
            type='text'
            name='lastName'
            value={company.lastName}
            onChange={(e) => handleChange(e, 'lastName')}
            required
          />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <label className='form-label' htmlFor='address'>
            Address
          </label>
          <input
            id='address'
            className='form-control mb-4'
            type='text'
            name='phone'
            value={company.address}
            onChange={(e) => handleChange(e, 'address')}
            required
          />
          <div className='valid-feedback'>Looks good!</div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <label className='form-label' htmlFor='emailAddress'>
            Email
          </label>
          <input
            id='emailAddress'
            className='form-control mb-4'
            type='text'
            name='emailAddress'
            value={company.address}
            onChange={(e) => handleChange(e, 'emailAddress')}
            required
          />
          <div className='valid-feedback'>Looks good!</div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <label className='form-label' htmlFor='phone'>
            Phone
          </label>
          <input
            id='phone'
            className='form-control mb-4'
            type='text'
            name='phone'
            value={company.phone}
            onChange={(e) => handleChange(e, 'phone')}
            required
          />
          <div className='valid-feedback'>Looks good!</div>
        </div>
        <div className='col'>
          <label className='form-label' htmlFor='fax'>
            Fax
          </label>
          <input
            id='fax'
            className='form-control mb-4'
            type='text'
            name='fax'
            value={company.fax}
            onChange={(e) => handleChange(e, 'fax')}
            required
          />
        </div>
      </div>
      <div className='text-center'></div>
    </form>
  );
}
