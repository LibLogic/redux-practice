export const setMoney = (username, amount, totalAmount) => ({
  type: "WITHDRAW_MONEY",
  username: username,
  amount: amount,
  totalAmount: totalAmount
});
