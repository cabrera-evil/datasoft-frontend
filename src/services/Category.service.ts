import axios from "axios";

export default class CategoryService {
    async getCategories() {
        try {
            const res = await axios.get(`/category`);
            return res.data;
        } catch (error: any) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            return errorMessage;
        }
    }
}