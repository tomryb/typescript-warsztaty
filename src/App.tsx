import React from 'react';
import Header from './components/HeaderZadanie2';

function App() {
  // const add = (a: number, b: number) => a + b //1 przykład
  // const add = (a: number, b?:number) => b ? a+b : a //zadanie 1

  // zadanie 1 extra
  // const add = (...rest: number[]) => {

  //
  //   let result: number = 0;
  //   rest.map((element: number) => {
  //     result += element
  //   })
  //   return result
  // }

  return (
    <div className="App">
      {/* {add(5, 5, 5)} */}

      {/* zadanie2 */}
      <Header title={"Tytuł"} subtitle={"Podtytuł"} />
    </div>
  );
}

export default App;
