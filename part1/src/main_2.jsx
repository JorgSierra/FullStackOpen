import ReactDOM from 'react-dom/client'

import App from './App_2.jsx'

let counter = 1;

const root = ReactDOM.createRoot(document.getElementById('root_2'));

const refresh = () => {
    root.render(
        <App counter={counter} />
    )
}


refresh();
setInterval(() => {
    refresh();
    counter += 1;
}, 1000);

// Making repeated calls to the render method is not the recommended way to re-render components
