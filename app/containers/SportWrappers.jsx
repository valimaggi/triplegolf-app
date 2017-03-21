import React from 'react';
import Sport from '../components/Sport';
import SportConstants from '../constants/sports';

export const GolfSport = () => <Sport sport={SportConstants.GOLF} />;

export const DiscgolfSport = () => <Sport sport={SportConstants.DISCGOLF} />;

export const MinigolfSport = () => <Sport sport={SportConstants.MINIGOLF} />;
