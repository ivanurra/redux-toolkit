import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { TodoApp } from "./TodoApp";
// import { PokemonApp } from "./store/PokemonApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
