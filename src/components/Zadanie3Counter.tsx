import React, { Component } from 'react'
import Zadanie3Button from './Zadanie3Button';

type CounterState = {
  count: number
}

type CounterProps = {
  title: string
}

export enum ButtonText {
  Increment = '+',
  Decrement = '-',
  Reset = 'reset'
}

export default class Zadanie3Counter extends Component<CounterProps, CounterState> {
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
        <Zadanie3Button text={ButtonText.Increment} handleClick={this.handleIncrement} />
        <Zadanie3Button text={ButtonText.Decrement} handleClick={this.handleDecrement} />
        <Zadanie3Button text={ButtonText.Reset} handleClick={this.handleReset} />
      </div>
    )
  }
}

