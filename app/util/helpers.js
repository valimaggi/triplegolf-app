export const createPath = pathName => `/${pathName}`;

export const grouplessPlayersOfSport = (players, sportGroups) => players.filter(player =>
  sportGroups.filter(group =>
    group.get('playerIds').includes(player.get('id'))
  ).count() === 0
);

export const capitalize = string => (string ? string.replace(/\b\w/g, l => l.toUpperCase()) : '');
