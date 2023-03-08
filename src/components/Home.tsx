import { coinsData } from "src/utils/constant";
import { TrendingIcon } from "src/assets/icons";
import { Card } from "./shared";

const Home = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <h5 className="flex items-center gap-4">
        <TrendingIcon /> Trending Assets
      </h5>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-14 my-14 text-center">
          {coinsData.map((data, index) => (
            <Card key={`card-${index + 1}`} coin={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
