import axios from "axios";

const ApiClient = axios.create({
    baseURL: "http://localhost:3001/kfc-blog/v1",
    timeout: 5000,
    httpsAgent: false,
});

export const getPosts = async () => {
    try {
        return await ApiClient.get("/post/");
    } catch (e) {
        return{
            error: true,
            message: e.response || e.message,
        }
    }
}

export const getPostDetails = async (pid) => {
    try {
        const { data } = await ApiClient.get(`/post/${pid}`);
        return { data };
    } catch (e) {
        return {
            error: true,
            message: e.response?.data?.message || e.message,
        };
    }
};



export const getPostFilter = async (filters) => {
    try {
        const { data } = await ApiClient.get("/post/filter", {
            params: {
                course: filters.course || undefined,
                title: filters.title || undefined,
                sortByDate: filters.order || undefined,
                startDate: filters.startDate || undefined,
                endDate: filters.endDate || undefined,
            },
        });
        return data;
    } catch (e) {
        return {
            error: true,
            message: e.response?.data?.message || e.message,
        };
    }
};



export const AddComment = async (pid, {username, text}) => {
    try {
        const { data } = await ApiClient.patch(`/post/${pid}`, {
            username,
            text,
        });
        return data;
    } catch (e) {
        return {
            error: true,
            message: e.response?.data?.message || e.message,
        };
    }
};