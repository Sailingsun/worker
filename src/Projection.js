import {useEffect, useState, useRef} from "react";

import './App.css';

function Projection(props) {
    const {myWorker} = props;
    const [value, setValue] = useState(12);

    useEffect(() => {
        myWorker.current.port.onmessage = function (e) {
            console.log(e.data);
            setValue(e.data);
        };
        setInterval(function () {
            myWorker.current.port.postMessage({get: true});
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
