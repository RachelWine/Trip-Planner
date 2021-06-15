import IServer from './interfaces/IServer';
import IApp from './interfaces/IApp';
import Factory from './interfaces/factory';

const server: IServer = Factory.CreateServer("Express", 8000);
const app: IApp = Factory.CreateApp("basic");

app.LoadServer(server);