import React, { Component } from 'react'
import ButtonZadanie3 from './ButtonZadanie3';

type CounterState = {
  count: number
}

type CounterProps = {
  title: string
}

enum Buttons {
  Increment = '+',
  Decrement = '-',
  Reset = 'reset'
}

export default class CounterZadanie3 extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };


  render() {
    return (
      <div>
        <header>
          {this.props.title}
        </header>
        <div>
          Counter: {this.state.count}
        </div>
        <ButtonZadanie3 />
        <button onClick={this.handleIncrement}>{Buttons.Increment}</button>
        <button onClick={this.handleDecrement}>{Buttons.Decrement}</button>
        <button onClick={this.handleReset}>{Buttons.Reset}</button>
      </div>
    )
  }
}

