export type AppPropTypesInterface = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type InitialState = {
  items: AppPropTypesInterface[],
  isLoading: boolean,
  isError: boolean,
}

export enum postListActionType {
  SET_LOADING = 'LOADING',
  SET_DATA = 'SET_DATA',
  SET_ERROR = 'SET_ERROR',
}

type PostListAction = {
  type: postListActionType,
  payload?: AppPropTypesInterface[],
}

export const initialState: InitialState = {
  items: [],
  isLoading: false,
  isError: false,
}

export function postListReducer(state: InitialState, action: PostListAction): InitialState {
  switch (action.type) {
    case postListActionType.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      }

    case postListActionType.SET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }

    case postListActionType.SET_DATA:
      return {
        ...state,
        isLoading: false,
        items: action.payload || [],
      }
    default:
      return state
  }
}