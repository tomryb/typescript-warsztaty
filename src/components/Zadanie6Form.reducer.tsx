export type Zadanie6Form = {
  title: string
}

export type InitialState = {
  count: number;
}

enum CounterActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
}

type CounterAction = {
  type: CounterActionType;
}

export const initialState: InitialState = {
  count: 10,
}

export function counterReducer(state: InitialState, action: CounterAction) {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return { count: state.count + 1 }

    case CounterActionType.DECREMENT:
      return { count: state.count - 1 }

    case CounterActionType.RESET:
      return { count: 0 }
    default:
      return state
  }
}
