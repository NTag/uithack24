import * as S from "./App.styles";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <S.Title>Welcome to Challenger25!</S.Title>
    </>
  );
}

export default App;
