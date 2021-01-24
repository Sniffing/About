import { Carousel } from 'antd';
import React from 'react';
import { DanceVideo } from './dance-video.component';
import _ from 'lodash';

interface IState {
  urls: string[];
}

export class DanceSection extends React.Component<unknown, IState> {
  public constructor(props) {
    super(props);
    this.state = {
      urls: []
    };
  }

  public componentDidMount(): void {
    this.getUrlList();
  }

  private getUrlList = async () => {
    const json = await (await fetch(process.env.PUBLIC_URL + '/links.json')).text();
    const data = await JSON.parse(json);
    this.setUrls(data.dance);
  }

  private setUrls = (urls: string[]) => {
    if (_.xor(urls, this.state.urls).length > 0) {
      this.setState({
        urls,
      });
    }
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