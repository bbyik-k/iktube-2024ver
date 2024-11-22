import React from 'react';
import { timeAgo } from '../util/date';

export default function VideoCard({ video }) {
  const { title, thumbnails, publishedAt, channelTitle } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{timeAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
