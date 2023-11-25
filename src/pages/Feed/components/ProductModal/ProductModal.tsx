import React from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';
import { IProductModel } from '../../../../models/IProductModel.interface';

interface ProductModalProps {
    isOpen: boolean;
    closeModal: () => void;
    product: IProductModel;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, closeModal, product }) => {
    return (
        <div
            className={`fixed inset-0 ${isOpen ? 'flex' : 'hidden'} items-center justify-center overflow-y-auto z-50`}
        >
            <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
                onClick={closeModal}
                style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl">
                <div className="p-4">
                    <ProductDetail props={product} />
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
