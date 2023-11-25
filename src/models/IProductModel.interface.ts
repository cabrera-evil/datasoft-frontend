import { ICategoryModel } from "./ICategoryModel.interface";

export interface IProductModel {
    prdId: number;
    prdName: string;
    prdDescription: string;
    prdPrice: number;
    prdImage: string;
    prdStatus: boolean;
    categoryModel: ICategoryModel;
}