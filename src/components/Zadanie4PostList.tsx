import React, { useEffect, useState } from 'react'
const url = 'https://jsonplaceholder.typicode.com/posts'
type AppPropTypesInterface = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Zadanie4PostList() {
  const [data, setData] = useState<AppPropTypesInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(response => response.json())
      .then((response: AppPropTypesInterface[]) => {
        setTimeout(() => {
          setData(response);
          setIsLoading(false);
        }, 2000);
      }).catch((e) => {
        setIsError(true);
        setIsLoading(false)
      });
  }, [])

  const renderPostsList = (): React.ReactNode => data.map((element: AppPropTypesInterface) => ( //o tu naprawiła
    <div key={element.id}>{element.title}</div>
  ))

  return (
    <div>
      <h2>Lista przepisów</h2>
      {!isLoading && !isError && renderPostsList()}
      {isLoading && <div>Ładowanie...</div>}
      {isError && <div>Nie pykło</div>}
    </div>
  )
}