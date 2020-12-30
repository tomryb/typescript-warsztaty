import React from 'react';
import Zadanie4Counter2 from './components/Zadanie4Counter2';
import Zadanie5Counter2 from './components/Zadanie5Counter2';
import Zadanie3Counter from './components/Zadanie3Counter';
import Header from './components/Zadanie2Header';
import Zadanie4PostList from './components/Zadanie4PostList';
import Zadanie5PostList from './components/Zadanie5PostList.component';
import Zadanie6Counter2 from './components/Zadanie6Form.component';

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
      <Zadanie3Counter title={TEXTS.COUNTER.TITLE} />

      {/* zadanie4 */}

      <Zadanie4Counter2 title={"elo"} />
      <Zadanie4PostList />

      {/* zadanie5 */}

      <Zadanie5Counter2 title={'elo ponownie'} />
      <Zadanie5PostList />

      {/* zadanie6 */}

      <Zadanie6Counter2 title={'Uszanowanko. Podaj wartość'}></Zadanie6Counter2>

    </div>
  );
}

export default App;
