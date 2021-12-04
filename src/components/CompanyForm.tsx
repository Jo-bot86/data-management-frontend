import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { companyApi } from '../shared/CompanyApi';
import Company from '../types/Company';

interface Props {
  companyName: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  fax: string;
  phone: string;
  addressList: string[];
  isEdit: boolean;
}

export default function CompanyForm(props: Props) {
  const [companyName, setCompanyName] = useState(props.companyName);
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [phone, setPhone] = useState(props.phone);
  const [fax, setFax] = useState(props.fax);
  const [email, setEmail] = useState(props.emailAddress);
  const [addressList, setAddressList] = useState(props.addressList);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const createCompany = (): Company => ({
    companyName: companyName,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    fax: fax,
    emailAddress: email,
    addressList: addressList,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCompany = createCompany();
    const method = props.isEdit ? 'PUT' : 'POST';
    props.isEdit
      ? companyApi(method, `/companies/${id}`, showCompanyList, newCompany)
      : companyApi(method, '/companies', showCompanyList, newCompany);
  };

  const showCompanyList = () => {
    history.push('/companies');
  };

  const handleAddressChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newAddressList = [...addressList];
    newAddressList[index] = e.target.value;
    setAddressList(newAddressList);
  };

  const addAddress = () => {
    setAddressList((currAddressList) => [...currAddressList, '']);
  };

  const removeAddress = (index: number) => {
    addressList.length > 1 &&
      setAddressList((currAddressList) => [
        ...currAddressList.slice(0, index),
        ...currAddressList.slice(index + 1),
      ]);
  };

  return (
    <form
      onSubmit={handleSubmit}
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
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-11'>
          <label className='form-label'>Address</label>
          <button
            className='btn btn-outline-primary btn-sm mx-2 py-0'
            onClick={addAddress}
            type='button'
          >
            +
          </button>
          {addressList.map((address, index) => (
            <div className='input-group' key={index}>
              <input
                type='text'
                className='form-control'
                value={address}
                onChange={(e) => handleAddressChange(e, index)}
                required
              />
              <button
                className='input-group-append btn btn-outline-danger'
                onClick={() => removeAddress(index)}
                type='button'
              >
                <i className='bi bi-trash'></i>
              </button>
            </div>
          ))}
          <div className='valid-feedback'>Looks good!</div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            className='form-control mb-4'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={fax}
            onChange={(e) => setFax(e.target.value)}
            required
          />
        </div>
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
}
