import includes from 'lodash/includes';

export const togglePreSelectToGroup = playerId =>
// eslint-disable-next-line
  prevState =>
    includes(prevState.preSelectedPlayerIds, playerId)
      ? {
        preSelectedPlayerIds: [prevState.preSelectedPlayerIds.filter(id => id !== playerId)],
      }
      : {
        preSelectedPlayerIds: [...prevState.preSelectedPlayerIds, playerId],
      };

export const blaa = () => 'fdf';
