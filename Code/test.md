```javascript
const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end();
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('user connected');
    socket.emit('welcome', 'welcome man');
});
```

```java
public class Main extends JavaPlugin {

    private static Main main;

    public static int voteParty;
    public long toRestart;

    @Getter
    public final static WorldGuardPlugin worldGuard = Main.getPlugin(WorldGuardPlugin.class);
}
```