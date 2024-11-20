import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { search } from '../api/youtube';
import FakeIktube from '../api/fakeIktube';

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => {
      const youtube = new FakeIktube();
      return youtube.search(keyword);
    },
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
