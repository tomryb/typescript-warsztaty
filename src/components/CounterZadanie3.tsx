import React, { Component } from 'react'
import ButtonZadanie3 from './ButtonZadanie3';

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
        <ButtonZadanie3 text={ButtonText.Increment} handleClick={this.handleIncrement} />
        <ButtonZadanie3 text={ButtonText.Decrement} handleClick={this.handleDecrement} />
        <ButtonZadanie3 text={ButtonText.Reset} handleClick={this.handleReset} />
      </div>
    )
  }
}

