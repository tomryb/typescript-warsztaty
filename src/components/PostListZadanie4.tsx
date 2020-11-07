import React, { useEffect, useState } from 'react'
const url = 'https://jsonplaceholder.typicode.com/posts'
type AppPropTypesInterface = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostListZadanie4() {
  const [data, setData] = useState<AppPropTypesInterface[]>([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((response: AppPropTypesInterface[]) => setData(response))
  }, [])

  const renderPostsList = (): React.ReactNode => data.map((element) => ( //o tu naprawiła
    <div key={element.id}>{element.title}</div>
  ))

  return (
    <div>
      <h2>Lista przepisów</h2>
      {renderPostsList()}
    </div>
  )
}