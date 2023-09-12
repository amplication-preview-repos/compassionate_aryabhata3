import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  asda?: StringNullableFilter;
  city?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  sad?: StringFilter;
  state?: StringNullableFilter;
  zip?: IntNullableFilter;
};
