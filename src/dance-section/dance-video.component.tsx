import React from 'react';
import ReactPlayer from 'react-player/youtube';

interface IProps {
  videoUrl: string;
}

export class DanceVideo extends React.Component<IProps> {
  public render(): React.ReactNode {
    const { videoUrl } = this.props;
    return (
      <ReactPlayer
        url={videoUrl}
        controls={true}
        light={true}
        volume={0.2}
        width="100%"
        height="400px"
      />
    );
  }
}