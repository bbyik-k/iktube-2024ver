import axios from 'axios';

export default class Iktube {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    //기본 url & key 설정
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    try {
      const res = await this.httpClient.get('search', {
        params: {
          part: 'snippet',
          maxResults: '25',
          q: keyword,
        },
      });
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
      const res = await this.httpClient.get('videos', {
        params: {
          part: 'snippet,contentDetails,statistics',
          chart: 'mostPopular',
          regionCode: 'KR',
          maxResults: '25',
        },
      });
      return res.data.items;
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      return [];
    }
  }
}
