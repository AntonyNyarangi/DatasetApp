import React from 'react';
import ReactDOM from 'react-dom';

// DOM Element to Render our app
const rootElement = document.querySelector("#root");

// DataSet function - View
function DataSet({dataset}) {
    return <div><a href={dataset.href}>{dataset.name}</a></div>;
}

// DataSet Function - Listing
function DataSetList({ datasets }) {
    return (
        <div>
            <h4>WakandaLand DataSets:</h4>
            <div>
                {datasets.map((dataset) => <DataSet dataset={dataset} />)}
            </div>
        </div>);
}

fetch('http://197.136.81.99:8080/training/api/dataSets?paging=false&fields=name,code,shortName,description,href', {
    headers: {
        'Authorization': `Basic ${btoa('antony.momanyi@gmail.com:Nyaranam8959#')}`
    }
}).then((fetchData) => fetchData.json()).then((jsonData) => {
    ReactDOM.render(<DataSetList datasets={jsonData.dataSets}/>, rootElement)
}).catch((error)=>{console.warn('error',error)});



// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
