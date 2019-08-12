import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import store from "./store";
import "./App.css";
import { setMoney } from "./actions";

class App extends Component {
  render() {
    // const { totalAmount, username } = this.state;
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {store.getState().username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(store.getState().totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={dispatchBtnAction} data-amount="10000">
            WITHDRAW $10,000
          </button>
          <button onClick={dispatchBtnAction} data-amount="5000">
            WITHDRAW $5,000
          </button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

function dispatchBtnAction(e) {
  const username = store.getState().username;
  const amount = e.target.dataset.amount;
  const totalAmount = store.getState().totalAmount;
  // console.log(username, amount, totalAmount);
  store.dispatch(setMoney(username, amount, totalAmount));
}

export default App;
