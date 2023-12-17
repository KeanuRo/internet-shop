export interface IProducts {
  id: number;
  title: string;
  price: string;
  image?: string;
  configure: IProductsConfig;
}

export interface IProductsConfig {
  SSD: string;
  chip: string;
  memory: string;
  display: string;
  year: number;
}
