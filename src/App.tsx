import React from 'react';

function App() {
  // const add = (a: number, b: number) => a + b //1 przykład
  // const add = (a: number, b?:number) => b ? a+b : a //zadanie 1
  const add = (...rest: number[]) => {

    let result: number = 0;
    rest.map((element: number) => {
      result += element
    })
    return result
  } //zadanie 1 extra //


  return (
    <div className="App">
      {/* {add(4, 5)}  */}
      {add(5, 5, 5)}
    </div>
  );
}

export default App;
