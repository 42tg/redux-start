import { createStore, combineReducers } from "redux"

const counter = namespace => (state = 0, action) => {
    switch (action.type) {
        case namespace + "_INCREMENT":
            return state + 1
        case namespace + "_DECREMENT":
            return state - 1
        default:
            return state
    }
}
const rootReducer = combineReducers({
    foo: counter("FOO"),
    faa: counter("FAA"),
})
let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
)
export default store
store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: "FAA_INCREMENT" })

store.dispatch({ type: "FOO_INCREMENT" })

store.dispatch({ type: "FAA_INCREMENT" })

store.dispatch({ type: "FOO_DECREMENT" })
