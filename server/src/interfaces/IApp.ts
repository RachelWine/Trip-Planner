import IServer from './IServer';

export default interface IApp {
    LoadServer(server: IServer): void;
}