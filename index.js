const axios = require('axios');
const API = "https://c-v5.onrender.com";

async function gpt(prompt) {
  try {
    const response = await axios.get(`${API}/api/gpt?prompt=${encodeURIComponent(prompt)}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GPT response:', error);
    return null;
  }
}

module.exports = { gpt };
