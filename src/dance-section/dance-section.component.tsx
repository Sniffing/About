import React from 'react';
import { DanceVideo } from './dance-video/dance-video.component';

export class DanceSection extends React.Component {

  public render(): React.ReactNode {
    const urlList = [
      'https://youtu.be/4yMWqdKn5VE',
      'https://youtu.be/GFJx_BkEKfw',
      'https://youtu.be/3J4Mokcrc0s'
    ];
    return (
      <div>
        {urlList.map((url, index) => (
          <DanceVideo key={index} videoUrl={url}/>
        ))}
      </div>
    );
  }
}