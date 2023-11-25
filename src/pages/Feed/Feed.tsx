import { useEffect, useState } from "react";
import FeedItem from "./components/FeedItem/FeedItem";
import { IProductModel } from '../../models/IProductModel.interface';
import ProductService from "../../services/Product.service";

export default function Feed() {
  const [feedItemsData, setFeedItemsData] = useState<IProductModel[]>([]);
  const productService = new ProductService();

  useEffect(() => {
    productService.getProduct()
      .then((data) => {
        setFeedItemsData(data);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {feedItemsData.map((item, index) => (
        <FeedItem
          key={index}
          imageSrc={item.prdImage}
          category={item.categoryModel.catName}
          name={item.prdName}
          price={item.prdPrice}
        />
      ))}
    </div>
  );
}
