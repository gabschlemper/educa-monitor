export const useUserStore = defineStore("user", {
  state: () => (
    { userRole: "Professor" }
  ),
  getters: {
    doubleCount: state => state.count * 2,
  },
  actions: {
    setUserRole(role)
    {
      this.userRole = role;
    },
  },
});