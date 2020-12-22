import React from 'react';
import './App.less';
import { DanceSection } from './dance-section/dance-section.component';

// import { hot } from 'react-hot-loader';
import { MeSection } from './me-section/me-section.component';

class App extends React.Component {

  public render(): React.ReactNode {
    return (
      <div className="App">
        <div className="content">
          {/* <DanceSection/> */}
          <div className="mt-6">
            <MeSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;