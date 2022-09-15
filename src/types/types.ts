export interface IList {
  city: string;
  floors: number;
  id: string;
  image: string;
  name: string;
  price: number;
  rooms: number;
  sqft: number;
  state: string;
}

export interface IData {
  listings: IList[];
}

export interface INumberInput {
  value: number;
}
