import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <TodoList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
