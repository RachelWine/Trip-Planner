import Express from '../providers/express';
import App from '../providers/app';

import IServer from './IServer';
import IApp from './IApp';


export default class Factory {
    public static CreateServer(type: string, port: number): IServer {
        if (type === "Express") {
            return new Express(port);
        }
    }

    public static CreateApp(type: string): IApp {
        if (type === "basic") {
            return new App();
        }
    }
}