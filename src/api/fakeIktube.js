import axios from 'axios';

export default class FakeIktube {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    try {
      const res = await axios.get(`/videos/search.json`);
      const items = await res.data.items.map((item) => ({ ...item, id: item.id.videoId }));
      console.log(items);
      return items;
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      return [];
    }
  }

  async #mostPopular() {
    try {
      const res = await axios.get(`/videos/popular.json`);
      console.log(res.data.items);
      return res.data.items;
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      return [];
    }
  }
}
