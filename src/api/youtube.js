import axios from 'axios';

export async function search(keyword) {
  try {
    const res = await axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`);
    return res.data.items;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    return [];
  }
}
