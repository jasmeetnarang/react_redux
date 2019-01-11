import { connect } from 'react-redux';
import Counter from './Counter';
import { INCREMENT, DECREMENT, CLEARFUNC } from "./actions";

const mapStateProps = (state, ownProps) => {
    return {
        value: state.value;
    }
}

const maoDispactProps = (dispatch, ownProps) => {
    return (
        onIncremenct: () => {
            dispatch(type: INCREMENT, value = 1);
        },

    )
}

