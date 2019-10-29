import { DefaultController } from "./controllers/default_controller";
import { ParentRoute } from "fortjs";
import { TestController } from "./controllers/test_controller";

export const routes: ParentRoute[] = [{
    path: "/*",
    controller: DefaultController
}, {
    path: "/test",
    controller: TestController
}];