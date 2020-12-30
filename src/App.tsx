import React from 'react';
import Counter2Zadanie4 from './components/Counter2Zadanie4';
import Counter2Zadanie5 from './components/Counter2Zadanie5';
import CounterZadanie3 from './components/CounterZadanie3';
import Header from './components/HeaderZadanie2';
import PostListZadanie4 from './components/PostListZadanie4';

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

  const TEXTS = {
    HEADER: {
        TITLE: 'Application Header',
        SUBTITLE: 'Application Subheader',
    },
    COUNTER: {
        TITLE: 'Counter Section'
    }
};

  return (
    <div className="App">
      {/* zadanie1 */}
      <p>{add(67, 2)}</p>
      <p>{add2(5, 5, 5)}</p>

      {/* zadanie2 */}
      <Header title={TEXTS.HEADER.TITLE} subtitle={TEXTS.HEADER.SUBTITLE} />

      {/* przykład3 */}
      <CounterZadanie3 title={TEXTS.COUNTER.TITLE}/>

      {/* zadanie4 */}

      <Counter2Zadanie4 title={"elo"}/>
      <PostListZadanie4/>

      {/* zadanie5 */}

      <Counter2Zadanie5 title={'elo ponownie'}/>
    </div>
  );
}

export default App;
