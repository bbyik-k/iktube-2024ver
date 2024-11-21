import axios from 'axios';

export default class IktubeClient {
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

  async search({ keyword, maxResults = 25 }) {
    return this.httpClient.get('search', {
      params: {
        part: 'snippet',
        q: keyword,
        maxResults,
      },
    });
  }

  async videos({ maxResults = 25, regionCode = 'KR' }) {
    return this.httpClient.get('videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode,
        maxResults,
      },
    });
  }
}
