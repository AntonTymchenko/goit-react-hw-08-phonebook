const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => {
  return state.auth.user.name;
};

const getFetchCurrentUser = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getFetchCurrentUser,
};
export default authSelectors;
