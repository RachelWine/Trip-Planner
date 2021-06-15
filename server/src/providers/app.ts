import IApp from '../interfaces/IApp';
import IServer from '../interfaces/IServer';


class App implements IApp {
    public LoadServer(server: IServer): void {
        server.init();
    }
}


export default App;