import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterStore.counter);
  const show = useSelector(state => state.counterStore.showCounter);

  const incrementHandler = () =>{
    dispatch(counterActions.increment());
  };
  const increaseHandler = () =>{
    dispatch(counterActions.increase(10)); // { type : SOME_UNIQUE_IDENTIFIER, payload: 10}
  };
  const decrementHandler = () =>{
    dispatch(counterActions.decrement())
  };
  const toggleCounterHandler = () =>{
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increment by 10</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
