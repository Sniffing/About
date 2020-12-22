import React from 'react';
import './App.less';
import { DanceSection } from './dance-section/dance-section.component';
import { MeLinks } from './me-section/me-links/me-links.component';

export default class App extends React.Component {

  public render(): React.ReactNode {
    return (
      <div className="App">
        {/* <DanceSection/> */}
        <MeLinks/>
      </div>
    );
  }
}


