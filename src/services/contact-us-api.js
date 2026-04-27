
import axios from "axios";

export const submitContactForm = async (data) => {
    const publiUrl = process.env.NEXT_PUBLIC_WEB3FORMS_API_URL;
    const response = await axios.post(`${publiUrl}/submit`, data);
    return response.data;
};