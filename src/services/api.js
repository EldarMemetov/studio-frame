import axios from 'axios';
import { handleError } from '@/utils/errorHandler';

const BASE_URL = 'https://feedback-frame.onrender.com';

export const sendFeedback = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/feedback`, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.error('Error sending feedback with payload:', data);
    throw handleError(error);
  }
};
