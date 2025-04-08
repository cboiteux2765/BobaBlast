import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Adjust the base URL as needed

export const fetchBobaStores = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/boba-stores`);
        return response.data;
    } catch (error) {
        console.error('Error fetching boba stores:', error);
        throw error;
    }
};

export const postBlogEntry = async (entry) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/blog`, entry);
        return response.data;
    } catch (error) {
        console.error('Error posting blog entry:', error);
        throw error;
    }
};

export const fetchRecommendations = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/recommendations/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        throw error;
    }
};