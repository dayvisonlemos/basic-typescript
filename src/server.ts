import express, {Application} from 'express';
import api from './api';

export default class Server {
    constructor(private app = express()) {
        this.initialize();
    }

    private initialize(): void {
        this.app.use(express.json());
        this.app.use(api);
    }

    public start(port: number): void{
        this.app.listen(port, () => {
            console.log(`App running on port ${port}`);
        })

    }

    public getApp(): Application{
        return this.app;
    }
}
