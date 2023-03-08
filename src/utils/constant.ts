import {
  BinanceCoinIcon,
  BitcoinIcon,
  EthereumIcon,
  ShibaInuIcon,
  SolanaIcon,
} from "src/assets/icons";
import { Coin } from "./interfaces";

export const coinsData: Coin[] = [
  {
    name: "Bitcoin (BTC)",
    price: 31812.8,
    previousPrice: 28631.52,
    tvl: 60000,
    icon: BitcoinIcon,
    popularPairs: [SolanaIcon, EthereumIcon, BinanceCoinIcon],
  },
  {
    name: "Solana (SOL)",
    price: 32.83,
    previousPrice: 36.87,
    tvl: 60000,
    icon: SolanaIcon,
    popularPairs: [BitcoinIcon, EthereumIcon, BinanceCoinIcon],
  },
  {
    name: "Ethereum (ETH)",
    price: 1466.45,
    previousPrice: 1641.39,
    tvl: 60000,
    icon: EthereumIcon,
    popularPairs: [SolanaIcon, BitcoinIcon, BinanceCoinIcon],
  },
  {
    name: "Binance USD (BUSD)",
    price: 1.0,
    previousPrice: 0.9974,
    tvl: 60000,
    icon: BinanceCoinIcon,
    popularPairs: [SolanaIcon, EthereumIcon, BinanceCoinIcon],
  },
  {
    name: "Bitcoin (BTC)",
    price: 0.00000001948,
    previousPrice: 0.00000002106,
    tvl: 60000,
    icon: ShibaInuIcon,
    popularPairs: [SolanaIcon, EthereumIcon, BinanceCoinIcon],
  },
];
