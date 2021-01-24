import React from 'react';
import './App.less';
import { CGISection } from './cgi-section/cgi-section.component';
import { DanceSection } from './dance-section/dance-section.component';

import { MeSection } from './me-section/me-section.component';
import { ESiteTabs } from './section-container/section-container.component';
import { SectionContainer } from './section-container/section-container.component';

class App extends React.Component {

  public get tabs(): Partial<Record<ESiteTabs, React.ReactNode>> {
    return {
      [ESiteTabs.ABOUT]: <MeSection/>,
      [ESiteTabs.DANCE]: <DanceSection/>,
      [ESiteTabs.CGI]: <CGISection/>,
    };
  }

  public render(): React.ReactNode {
    return (
      <div className="App">
        <div className="content">
          <SectionContainer tabs={this.tabs}/>
        </div>
      </div>
    );
  }
}

export default App;