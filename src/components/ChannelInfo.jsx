import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => youtube.channelImageURL(id),
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      <img src={url} alt={name} />
      {id} {name}
    </div>
  );
}
