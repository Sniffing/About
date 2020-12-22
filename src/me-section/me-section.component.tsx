import React from 'react';
import { MeLinks } from './me-links/me-links.component';

export class MeSection extends React.Component {

  public render(): JSX.Element {
    return (
      <div className="me">
        <div className="picture">

        </div>

        <div className="about">

        </div>

        <MeLinks />
      </div>
    );
  }
}