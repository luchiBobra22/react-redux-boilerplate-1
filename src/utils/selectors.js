import { createSelector } from 'reselect';

const getListIds = state => (state.allIds);
const getListMap = state => (state.byId);


export const getList = createSelector(
  [getListIds, getListMap],
  (ids, map) => (ids.map(item => map.get(item.toString())).reverse())
);

