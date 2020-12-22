import React from 'react';
import { FacebookFilled, GithubFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

import './me-links.less';
import { Button, Col, Row } from 'antd';
import { observer } from 'mobx-react';
import { computed } from 'mobx';

export enum SocialLink {
  INSTAGRAM,
  FACEBOOK,
  GITHUB,
  LINKEDIN
}

interface IProps {
  socialLinks?: SocialLink[]
}

interface SocialLinkDetail {
  url: string,
  component: React.ReactNode,
}

@observer
export class MeLinks extends React.Component<IProps> {

  private readonly allLinks = [SocialLink.INSTAGRAM, SocialLink.FACEBOOK,
    SocialLink.GITHUB, SocialLink.LINKEDIN];

  @computed
  private get icons() {
    const {socialLinks = this.allLinks} = this.props;
    const iconMap: Record<SocialLink, SocialLinkDetail> = {
      [SocialLink.INSTAGRAM]: {
        url: 'https://www.instagram.com/tserence/?hl=en',
        component: <InstagramFilled className={'icon'}/>
      },
      [SocialLink.FACEBOOK]: {
        url: 'http://www.facebook.com',
        component: <FacebookFilled className={'icon'}/>
      },
      [SocialLink.GITHUB]: {
        url: 'https://github.com/sniffing',
        component: <GithubFilled className={'icon'}/>
      },
      [SocialLink.LINKEDIN]: {
        url: 'https://www.linkedin.com/in/tserence/',
        component: <LinkedinFilled className={'icon'}/>
      },
    };

    return socialLinks
      .map(x => (
        <Col key={x}>
          <Button type="link" onClick={() => this.handleClick(iconMap[x].url)}>
            {iconMap[x].component}
          </Button>
        </Col>
      ));
  }

  private handleClick(url: string) {
    window.open(url, '_blank');
  }

  public render(): React.ReactNode {
    return (
      <Row className={'container'} gutter={16}>
        {this.icons}
      </Row>
    );
  }
}