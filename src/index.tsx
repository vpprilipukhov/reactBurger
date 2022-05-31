import React from 'react';
import './index.css';
import App from './components/app/app';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./redux/rootReducer";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";


const store = createStore(rootReducer, applyMiddleware(thunk));

// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
// root.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App/>
//         </BrowserRouter>
//     </Provider>
// );
// reportWebVitals();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);