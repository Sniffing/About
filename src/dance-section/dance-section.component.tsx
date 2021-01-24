import { Carousel } from 'antd';
import React from 'react';
import { DanceVideo } from './dance-video.component';

interface IState {
  urls: string[];
}

export class DanceSection extends React.Component<unknown, IState> {

  state: {
    urls: [];
  };

  public componentDidMount(): void {
    this.getUrlList();
  }

  private getUrlList = async () => {
    const json = await (await fetch(process.env.PUBLIC_URL + '/links.json')).text();
    const data = await JSON.parse(json);
    this.setUrls(data.dance);
  }

  private setUrls = (urls: string[]) => {
    console.log('setting urls', urls);
    this.setState({
      urls,
    });
  }

  public render(): React.ReactNode {
    return (
      <div>
        <p>
          I&#39;ve been dancing since University. I joined my University team,
          as well as several community teams in London and San Francisco,
          here are some videos
        </p>
        <Carousel>
          {this.state?.urls.map((url, index) => (
            <DanceVideo key={index} videoUrl={url}/>
          ))}
        </Carousel>
      </div>

    );
  }
}