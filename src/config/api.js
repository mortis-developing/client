import io from 'socket.io-client';

const socket = io("http://192.168.2.100/", {
    reconnoctionDelayMax: 10000,
    auth: {
        token: "123"
    },
    query: {
        "my-key": "my-value"
    }
});