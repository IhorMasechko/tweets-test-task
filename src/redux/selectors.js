export const selectUsers = (state) => state.users.items;

export const selectLoading = (state) => state.users.isLoading;

export const selectError = (state) => state.users.error;

export const selectStatusFilter = (state) => state.filter.statusFilter;

export const selectIdFollowers = (state) => state.filter.idFollowers;

export const selectVisibleTweets = (state) => {
  const cards = selectUsers(state);
  const statusFilter = selectStatusFilter(state);
  const iDFollowers = selectIdFollowers(state);

  switch (statusFilter) {
    case statusFilter.all:
      return cards;
    case statusFilter.follow:
      return cards.filter((card) => !iDFollowers.includes(card.id));
    case statusFilter.followings:
      return cards.filter((card) => iDFollowers.includes(card.id));
    default:
      return cards;
  }
};
