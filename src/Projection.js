import {useEffect, useState} from "react";

import './App.css';

function Projection() {
    const [value, setValue] = useState(12);

    useEffect(() => {
        const myWorker = new SharedWorker(new URL('./sharedWorker.worker.js', import.meta.url));
        myWorker.port.onmessage = function (e) {
            console.log(e.data);
            setValue(e.data);
        };
        setInterval(function () {
            myWorker.port.postMessage({get: true});
        }, 1000);
    }, []);
    
    return (
        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    href="/projection"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {value}
                </a>
            </header>
        </div>
    );
}

export default Projection;
