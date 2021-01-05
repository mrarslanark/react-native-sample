import TYPES from '../types';

export const login = () => {
  return {
    type: TYPES.LOAD_ENTITIES,
    user: {},
  };
};
