import { Carousel, Image } from 'antd';
import React from 'react';
import _ from 'lodash';

interface IState {
  cgiImages: string[];
}

export class CGISection extends React.Component<unknown, IState> {
  public constructor(props) {
    super(props);
    this.state = {
      cgiImages: []
    };
  }

  public componentDidMount(): void {
    this.getCGIImages();
  }

  private getCGIImages = async () => {
    const json = await (await fetch(process.env.PUBLIC_URL + '/links.json')).text();
    const data = await JSON.parse(json);
    this.setCGIImages(data.cgi);
  }

  private setCGIImages = (cgiImages: string[]) => {
    if (_.xor(cgiImages, this.state.cgiImages).length > 0) {
      this.setState({
        cgiImages,
      });
    }
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
          {this.state.cgiImages.map((image,index) => (
            <Image key={index} width={500} src={process.env.PUBLIC_URL + image}/>
          ))}
        </Carousel>
      </div>
    );
  }
}