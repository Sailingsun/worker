let data = null;
/* eslint-disable */
self.addEventListener('connect', function (e) {
    
    const port = e.ports[0];
    port.addEventListener('message', function (e) {
        if (e.data.get) {
            console.log('get', data, e.data);
            port.postMessage(data);
        }
        else {
            console.log('set', data, e.data);
            data = e.data;
        }
    });
    
    port.start();
});