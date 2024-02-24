import React from "react";
import { Route, Routes } from "react-router-dom";
import First from "./pages/First";
import ChapterList from "./pages/ChapterList";
import FirstChapter from "./pages/FirstChapter";

var hey = "global scope";
function hello() {
  console.log(hey);
}
console.log(hey); // global scope
hello(); // global scope
//

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChapterList />} />
      <Route path="/first" element={<FirstChapter />} />
      <Route path="/second" element={<First />} />
      <Route path="/third" element={<First />} />
      <Route path="/fourth" element={<First />} />
    </Routes>
  );
}

export default App;
