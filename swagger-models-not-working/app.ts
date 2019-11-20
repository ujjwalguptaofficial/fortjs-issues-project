import { Fort, MustacheViewEngine } from 'fortjs';
import { routes } from './routes';
import { Swagger } from "fortjs-swagger"
import Path from "path"

export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = MustacheViewEngine;
    }

    initSwagger() {
        new Swagger().create({
            appInfo: {
                title: "Swagger Test",
                description: "Swagger Test",
                version: "1.0"
            },
            servers: [{
                description: "local",
                url: "http://localhost:4000"
            }],
            outputPath: Path.join(__dirname, "../swagger/"),
            securitySchemes: {
                basicAuth: {
                    type: "http",
                    scheme: "basic"
                }
            }
        });
    }
}


