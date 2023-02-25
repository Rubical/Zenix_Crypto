export const checkIsAuthItemExist = (authItem, defaultItem) => {
  return authItem ? authItem : defaultItem;
};
