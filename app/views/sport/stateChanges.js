import includes from 'lodash/includes';
import has from 'lodash/has';

// eslint-disable-next-line
export const togglePreSelectToGroup = playerId =>
// eslint-disable-next-line
  prevState => {
    if (playerId === undefined || playerId === null) {
      return prevState;
    } else if (has(prevState, 'preSelectedPlayerIds')) {
      if (includes(prevState.preSelectedPlayerIds, playerId)) {
        return { preSelectedPlayerIds: prevState.preSelectedPlayerIds.filter(id => id !== playerId) };
      }
      return { preSelectedPlayerIds: [...prevState.preSelectedPlayerIds, playerId] };
    }
    return { preSelectedPlayerIds: [playerId] };
  };
