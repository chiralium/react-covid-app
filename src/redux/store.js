import { createStore } from 'redux';
import { reducer } from './reducer.js';

export default function init_store() {
    return createStore(reducer);
}