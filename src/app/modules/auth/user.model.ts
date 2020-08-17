import {Deserializable} from '../../_interfaces/deserializable.model';

export class User implements Deserializable {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  isBookerAuthorize: boolean;

  deserialize(input: any): this {
    this.id = input.id;
    this.firstName = input.first_name;
    this.lastName = input.last_name;
    this.email = input.email;
    this.phone = input.phone;
    this.isBookerAuthorize = input.is_booker_authorize;
    this.fullName = this.firstName + ' ' + this.lastName;

    return this;
  }

  serialize(input: any) {
    Object.assign(this, input);

    return this;
  }
}
