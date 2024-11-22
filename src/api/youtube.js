export default class Iktube {
  // eslint-disable-next-line no-useless-constructor
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    try {
      const res = await this.apiClient.search({ keyword });
      const items = await res.data.items.map((item, idx) => ({ ...item, id: item.id?.videoId || `fallback-${idx}` }));
      return items;
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      return [];
    }
  }

  async #mostPopular() {
    try {
      const res = await this.apiClient.videos({});
      return res.data.items;
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      return [];
    }
  }
}
