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
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-2/3'>
        <iframe id='player' type='text/html' width='100%' height='600' src={`https://www.youtube.com/embed/${id}`} style={{ border: 'none' }} title={title} />
        <div className='p-8'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className='whitespace-pre-wrap'>{description}</pre>
        </div>
      </article>
      <section className='basis-1/3'>
        <RelaatedVideos id={id} channelId={channelId} />
      </section>
    </section>
  );
}
