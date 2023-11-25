// Home.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductService from '../../services/Product.service';
import FeedItem from '../Feed/components/FeedItem/FeedItem';
import { IProductModel } from '../../models/IProductModel.interface';
import { ToastContainer, toast } from 'react-toastify';

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
            toast.error('Error fetching products', {
                toastId: 'fetch-error',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
            });
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
            <ToastContainer />
        </div>
    );
};

export default Feed;
