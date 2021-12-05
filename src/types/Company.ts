import { Address } from "./Address";

export default interface Company {
  id?: number;
  companyName: string;
  companyNr?: string;
  deleted?: boolean;
  emailAddress: string;
  fax: string;
  firstName: string;
  lastName: string;
  phone: string;
  addressList: Address[];
}


