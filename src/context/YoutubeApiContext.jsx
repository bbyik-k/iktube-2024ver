import { createContext, useContext } from 'react';
import Iktube from '../api/youtube';
import FakeIktube from '../api/fakeIktube';

export const YoutubeApiContext = createContext();

// const youtube = new Iktube();
const youtube = new FakeIktube();

export function YoutubeApiPorvider({ children }) {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
