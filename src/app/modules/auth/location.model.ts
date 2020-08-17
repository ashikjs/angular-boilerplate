import {Deserializable} from '../../_interfaces/deserializable.model';

export class Location implements Deserializable {
  id: number;
  businessName: string;
  address: string;
  email: string;
  phone: string;
  website: string;
  image: string;

  // services: Service[];

  deserialize(input: any) {
    this.id = input.booker_id;
    this.businessName = input.BusinessName;
    this.address = input.address;
    this.email = input.EmailAddress;
    this.phone = input.Phone;
    this.website = input.WebSite;
    this.image = input.image_path;

    // if (input.services !== undefined) {
    //   this.services = input.services.map(s => new Service().deserialize(s));
    // }

    return this;
  }
}
