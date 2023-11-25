// Home.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductService from '../../services/Product.service';
import FeedItem from '../Feed/components/FeedItem/FeedItem';
import { IProductModel } from '../../models/IProductModel.interface';

const Feed: React.FC = () => {
    const [feedItemsData, setFeedItemsData] = useState<IProductModel[]>([]);
    const { catId } = useParams();
    const productService = new ProductService();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            if (catId !== '0' && catId !== undefined) {
                productService.getProductByCategory(catId)
                    .then((data) => {
                        setFeedItemsData(data);
                    });
            } else {
                navigate('/');
                productService.getProduct()
                    .then((data) => {
                        setFeedItemsData(data);
                    });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [catId]);

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
};

export default Feed;
