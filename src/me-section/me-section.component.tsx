import { Avatar, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { MeLinks } from './me-links/me-links.component';
import me from '../images/me.jpg';

import './me-section.less';

import data from './me-section.json';

export class MeSection extends React.Component {


  public render(): JSX.Element {
    const {title, description} = data;
    return (
      <div className="me mt-4">
        <Card
          bordered={false}
          cover={<Avatar size={128} src={me}/>}
        >
          <Meta
            title={title}
            description={<p className="description mb-4">{description}</p>}/>
          <MeLinks />
          <div className="py-20">
            In progress..
          </div>
        </Card>
      </div>
    );
  }
}