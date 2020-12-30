import React, { useEffect, useReducer } from 'react'
const url = 'https://jsonplaceholder.typicode.com/posts'
type AppPropTypesInterface = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type InitialState = {
  items: AppPropTypesInterface[],
  isLoading: boolean,
  isError: boolean
}

const initialState: InitialState = {
  items: [],
  isLoading: false,
  isError: false
}

enum postListActionType {
  SET_LOADING = 'SET_LOADING',
  SET_DATA = 'SET_DATA',
  SET_ERROR = 'SET_ERROR'
}

type PostListAction = {
  type: postListActionType,
  payload: AppPropTypesInterface[]
}

function postListReducer(state: InitialState, action: PostListAction): InitialState {
  switch (action.type) {
    case postListActionType.SET_LOADING:
      return {
        ...state,
        isLoading: true
      }

    case postListActionType.SET_ERROR:
      return {
        ...state,
        isLoading: false,
        // payload: 
      }

    case postListActionType.SET_DATA:
      return {
        ...state,
        isLoading: true
      }
  }
}

export default function PostListZadanie5() {
  const [data, setData] = useReducer(postListReducer, initialState);

  // useEffect(() => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then((response: AppPropTypesInterface[]) => setData(response))
  // }, [])

  // const renderPostsList = (): React.ReactNode => data.map((element) => ( //o tu naprawiła
  //   <div key={element.id}>{element.title}</div>
  // ))

  return (
    <div>
      <h2>Lista przepisów</h2>
      {/* {renderPostsList()} */}
    </div>
  )
}