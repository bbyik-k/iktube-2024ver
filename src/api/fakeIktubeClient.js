import axios from 'axios';

export default class FakeIktubeClient {
  async search() {
    return axios.get(`/videos/search.json`);
  }
  async videos() {
    return axios.get(`/videos/popular.json`);
  }
  async channel() {
    return axios.get(`/videos/channel.json`);
  }

  async searchLatest() {
    return axios.get(`/videos/latest.json`);
  }
}
