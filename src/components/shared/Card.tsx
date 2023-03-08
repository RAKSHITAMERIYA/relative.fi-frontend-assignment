import { cardBackground } from "src/assets/images";
import { formatCurrency } from "src/utils/helpers";
import { Coin } from "src/utils/interfaces";

interface Props {
  coin: Coin;
}

export const Card = ({ coin }: Props) => {
  const { icon: Icon, name, popularPairs, price, previousPrice, tvl } = coin;

  const renderPercentage = () => {
    const percentage =
      (((price - previousPrice) / price) * 100).toFixed(2) + "%";
    const className = `opacity-90 text-xs absolute top-2 right-3 ${
      previousPrice > price ? "text-red-600" : "text-green-600"
    }`;
    return <span className={className}>{percentage}</span>;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${cardBackground})`,
      }}
      className="w-full min-w-[290px] md:max-w-[290px] relative bg-card flex flex-col items-center p-4 rounded-2xl"
    >
      <div className="flex w-[100px] h-[100px] justify-center items-center absolute -top-12 bg-cardIcon rounded-full">
        <Icon />
      </div>
      <h5 className="mt-14 text-xs text-primaryDark leading-8">{name}</h5>
      <div className="bg-primaryBackground w-full text-center p-1 rounded-2xl mt-1 relative">
        <span className="text-primaryLight opacity-90 text-base font-semibold leading">
          {formatCurrency(price)}
        </span>
        {renderPercentage()}
      </div>
      <h5 className="text-xs text-primaryDark leading-8">Price</h5>
      <div className="bg-primaryBackground w-full text-center p-1 rounded-2xl mt-1">
        <span className="text-primaryLight opacity-90 text-base font-semibold leading-8">
          {formatCurrency(tvl, { maximumFractionDigits: 0 })}
        </span>
      </div>
      <h5 className="text-xs text-primaryDark leading-8">TVL</h5>
      <div className="bg-primaryBackground text-center px-4 py-2 rounded-2xl mt-1 flex justify-center gap-x-4">
        {popularPairs.map((Icon, index) => (
          <Icon
            key={`${name}-popular-pair-${index + 1}`}
            height={22}
            width={22}
          />
        ))}
      </div>
      <h5 className="text-xs text-primaryDark leading-8">Popular Pairs</h5>
    </div>
  );
};
