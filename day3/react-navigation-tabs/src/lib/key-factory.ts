export const queryKeys = {
  users: {
    all: ["users"],
    detail: (id: number) => [...queryKeys.users.all, id],
  },
};
