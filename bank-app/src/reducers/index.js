export default (state, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY":
      const totalAmount = action.totalAmount - action.amount;
      return {
        ...state,
        totalAmount: totalAmount
      };
    default:
      return state;
  }
};
