
export interface Product {
  id: number;
  name: string;
  image: string;
  category?: string;
  description?: string;
}

export interface ContactDetails {
  address: string;
  phone: string;
  email: string;
  fssai: string;
}
