export interface Result {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: number;
}

export interface TSetFilter {
  arg: {
    name: string;
    value: string;
  }
}
