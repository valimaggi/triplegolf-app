import React from 'react';
import Sport from '../components/Sport.jsx';
import SportConstants from '../constants/sports';

export class GolfSport extends React.Component  {
  render() {
    return (
        <Sport sport={SportConstants.GOLF}/>
    );
  }
}

export class DiscgolfSport extends React.Component  {
  render() {
    return (
        <Sport sport={SportConstants.DISCGOLF}/>
    );
  }
}

export class MinigolfSport extends React.Component  {
  render() {
    return (
        <Sport sport={SportConstants.MINIGOLF}/>
    );
  }
}
