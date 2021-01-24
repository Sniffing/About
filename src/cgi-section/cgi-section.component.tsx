import { Carousel } from 'antd';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';

@observer
export class CGISection extends React.Component {

  @observable
  private cgiImages: string[] = [];

  public componentDidMount(): void {
    this.getCGIImages();
  }

  private getCGIImages = async () => {
    const json = await (await fetch(process.env.PUBLIC_URL + '/links.json')).text();
    const data = await JSON.parse(json);
    this.setCGIImages(data.cgi);
  }

  @action
  private setCGIImages = (cgiImages: string[]) => {
    console.log('setting cgi', cgiImages);
    this.cgiImages = cgiImages;
  }

  public render(): React.ReactNode {
    return (
      <div>
        <p>
          I recently picked up 3D rendering. I use the open source software,
          Blender, and here are some of the projects I am most proud of
          whilst I have been learning.
        </p>

        <Carousel>
          {this.cgiImages.map((image,index) => (
            <div key={index}>image {image}</div>
          ))}
        </Carousel>
      </div>
    );
  }
}