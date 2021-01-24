import { Tabs } from 'antd';
import React from 'react';
import { MeSection } from '../me-section/me-section.component';

import './section-container.less';

const { TabPane } = Tabs;
interface IProps {
  tabs?: Partial<Record<ESiteTabs, React.ReactNode>>;
}

export enum ESiteTabs {
  ABOUT, DANCE, CGI
}

export const ESiteTabsLabels: Record<ESiteTabs, string> = {
  [ESiteTabs.ABOUT]: 'About',
  [ESiteTabs.DANCE]: 'Dance',
  [ESiteTabs.CGI]: 'CGI',
};

export class SectionContainer extends React.Component<IProps> {

  public render(): React.ReactNode {
    const { tabs = { [ESiteTabs.ABOUT]: <MeSection/>} } = this.props;
    return (
      <Tabs className="sectionContainer">
        {Object.entries(tabs).map(([tab, component]) => (
          <TabPane tab={
            <span className="capitalize mx-2">
              {ESiteTabsLabels[tab]}
            </span>} key={tab}>
            {component}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}