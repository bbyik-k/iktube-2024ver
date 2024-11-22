import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelaatedVideos from '../components/RelaatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  const { id = 'M7lc1UVf-VE' } = video;
  const { title, channelId, channelTitle, description } = video.snippet;

  console.log(video);
  // console.log(channelId);
  return (
    <section>
      <article>
        <iframe id='player' type='text/html' width='60%' height='400' src={`http://www.youtube.com/embed/${id}`} style={{ border: 'none' }} title={title} />
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <section>
        <RelaatedVideos id={id} channelId={channelId} />
      </section>
    </section>
  );
}
