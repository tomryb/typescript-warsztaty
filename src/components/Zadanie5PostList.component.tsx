import React, { useEffect, useReducer } from 'react';
import { initialState, postListReducer, postListActionType, AppPropTypesInterface } from './Zadanie5PostList.reducer';

const url = 'https://jsonplaceholder.typicode.com/posts';

export default function Zadanie5PostList() {
  const [{ items, isLoading, isError }, dispatch] = useReducer(postListReducer, initialState);

  useEffect(() => {
    dispatch({ type: postListActionType.SET_LOADING });
    fetch(url)
      .then(response => response.json())
      .then((response: AppPropTypesInterface[]) => {
        setTimeout(() => {
          dispatch({ type: postListActionType.SET_DATA, payload: response });
        }, 3000);
      }).catch((e) => {
        dispatch({ type: postListActionType.SET_ERROR });
      });
  }, [])

  const renderPostsList = (): React.ReactNode => items.map((element: AppPropTypesInterface) => {
    return (
      <div key={element.id}>{element.title}</div>
    )
  });

  return (
    <div>
      <h2>Lista przepisów</h2>
      {!isLoading && !isError && renderPostsList()}
      {isLoading && <div>Ładowanie...</div>}
      {isError && <div>Nie pykło</div>}
    </div>
  )
}