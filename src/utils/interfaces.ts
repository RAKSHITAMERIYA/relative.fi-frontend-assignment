import { Icon } from "src/assets/icons";

export interface Coin {
  name: string;
  price: number;
  previousPrice: number;
  tvl: number;
  icon: Icon;
  popularPairs: Icon[];
}
