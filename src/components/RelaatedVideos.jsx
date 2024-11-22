import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

export default function RelaatedVideos({ id, channelId }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['latestVideo', channelId],
    queryFn: () => youtube.latestVideos(channelId),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      <h1>channelId: {channelId}</h1>
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
