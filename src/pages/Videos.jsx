import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import axios from 'axios';

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () => {
      try {
        const res = await axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`);
        return res.data.items;
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
        return [];
      }
    },
    staleTime: 1000 * 60 * 5,
  });
  console.log(videos);
  return (
    <>
      <div>Videos {keyword ? `: 🔎${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 🤨</p>}
      {videos && (
        <ul>
          {videos.map((video, idx) => (
            <VideoCard key={idx} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
