import React from 'react';
import CounterZadanie3 from './components/CounterZadanie3';
import Header from './components/HeaderZadanie2';

function App() {
  // const add = (a: number, b: number) => a + b //1 przykład
  const add = (a: number, b?: number) => b ? a + b : a //zadanie 1

  // zadanie 1 extra
  const add2 = (...rest: number[]) => {


    let result: number = 0;
    rest.map((element: number) => {
      result += element
    })
    return result
  }

  // zadanie3
  const COUNTERPROPS = {
    COUNTER: {
      TITLE: 'Counter Section',
    }
  }
  return (
    <div className="App">
      {/* zadanie1 */}
      <p>{add(67, 2)}</p>
      <p>{add2(5, 5, 5)}</p>

      {/* zadanie2 */}
      <Header title={"Tytuł"} subtitle={"Podtytuł"} />

      {/* przykład3 */}
      <CounterZadanie3 title={COUNTERPROPS.COUNTER.TITLE}/>
    </div>
  );
}

export default App;
