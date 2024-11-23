import { createContext, useContext } from 'react';
import Iktube from '../api/youtube';
import FakeIktubeClient from '../api/fakeIktubeClient';
import IktubeClient from '../api/youtubeClient';

export const YoutubeApiContext = createContext();

// const client = new FakeIktubeClient();
const client = new IktubeClient();

const youtube = new Iktube(client);

export function YoutubeApiPorvider({ children }) {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
