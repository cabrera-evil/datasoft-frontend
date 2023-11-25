import axios from "axios";

export default class ProductService {
    async getProduct() {
        try {
            const res = await axios.get(`/product`);
            return res.data;
        } catch (error: any) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            return errorMessage;
        }
    }

    async getProductByCategory(catId: string) {
        try {
            const res = await axios.get(`/product/filter?category=${catId}`);
            return res.data;
        } catch (error: any) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            return errorMessage;
        }
    }

    async getProductById(id: number) {
        try {
            const res = await axios.get(`/product/filter?id=${id}`);
            return res.data;
        } catch (error: any) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            return errorMessage;
        }
    }
}