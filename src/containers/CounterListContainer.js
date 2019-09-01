import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import getRandomColor from '../lib/getRandomColor';

const mapStateToProps = (state) => ({ counters: state.counters });

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (index) => dispatch(actions.increment(index)),
  onDecrement: (index) => dispatch(actions.decrement(index)),
  onSetColor: (index) => {
    const randomColor = getRandomColor();
    dispatch(actions.setColor({ index, randomColor }));
  },
});

const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterListContainer;