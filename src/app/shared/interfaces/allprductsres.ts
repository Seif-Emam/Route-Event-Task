export interface AllProductRes {
    id: number;
    title: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
    image: string;
  }
  