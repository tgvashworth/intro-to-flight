var io = require('socket.io')(process.argv[2]);

function makeBroadcaster(socket, event) {
    socket.on(event, function () {
        console.log('broadcasting', event, arguments);
        socket.broadcast.emit.apply(socket.broadcast, [event].concat([].slice.call(arguments)));
    })
}
io.on('connection', function (socket) {
    makeBroadcaster(socket, 'next');
    makeBroadcaster(socket, 'previous');
    makeBroadcaster(socket, 'slide');
    makeBroadcaster(socket, 'setup');
    makeBroadcaster(socket, 'activate');
});
