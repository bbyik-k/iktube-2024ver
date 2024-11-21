import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => youtube.search(keyword),
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      <div>Videos {keyword ? `: 🔎${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 🤨</p>}
      {videos && (
        <ul>
          {videos.map((video, idx) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
