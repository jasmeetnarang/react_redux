import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Counter } from "./components";
import counter from "./reducers";
import { INCBY5, DECREMENT,CLEARFUNC} from "./actions";

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter
          value={store.getState()}
          onIncrement={() => store.dispatch(INCBY5())}
          onDecrement={() => store.dispatch({ type: DECREMENT })}
          onClear={() => store.dispatch(CLEARFUNC())}
          onIncby5={() => store.dispatch(INCBY5(5))}
    />,
    document.getElementById("root")
  );
};

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
