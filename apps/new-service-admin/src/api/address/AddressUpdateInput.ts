import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  asda?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  sad?: string;
  state?: string | null;
  zip?: number | null;
};
