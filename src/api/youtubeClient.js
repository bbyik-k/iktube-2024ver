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

  async searchLatest({ channelId = 'UC_x5XG1OV2P6uZZ5FSM9Ttw', maxResults = 25 }) {
    return this.httpClient.get('search', {
      params: {
        part: 'snippet',
        channelId,
        maxResults,
        type: 'video',
        order: 'date',
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

  async channel({ id = 'UC_x5XG1OV2P6uZZ5FSM9Ttw' }) {
    return this.httpClient.get('channels', {
      params: {
        part: 'snippet,contentDetails,statistics',
        id,
      },
    });
  }
}
