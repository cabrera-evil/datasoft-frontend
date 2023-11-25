import { useState } from 'react';
import ProductModal from '../ProductModal/ProductModal';
import { IProductModel } from '../../../../models/IProductModel.interface';

interface IFeedItemProps {
    props: IProductModel;
}

export default function FeedItem({ props }: IFeedItemProps) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className={`flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg`} onClick={openModal}>
                <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                    <img className="relative w-40 h-40 object-contain" src={props.prdImage} alt={props.prdName} />
                </div>
                <div className={`relative text-black px-6 pb-6 mt-6`}>
                    <span className="block opacity-75 -mb-1">{props.categoryModel.catName}</span>
                    <div className="flex justify-between">
                        <span className={`block font-semibold text-xl`}>{props.prdName}</span>
                        <span
                            className={`block bg-[#72C4E6] rounded-full text-xs font-bold px-3 py-2 leading-none flex items-center`}
                        >{`$${props.prdPrice.toFixed(2)}`}</span>
                    </div>
                </div>
            </div>

            <ProductModal
                isOpen={modalOpen}
                closeModal={closeModal}
                product={props}
            />
        </>
    );
}
