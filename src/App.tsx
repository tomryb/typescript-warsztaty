import React from 'react';

function App() {
  const add = (a: number, b: number) => a + b //1 przykład

  return (
    <div className="App">
      {add(4, 5)}
    </div>
  );
}

export default App;
