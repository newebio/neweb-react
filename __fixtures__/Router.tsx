import { ClassicRouter, MatchedRoute, PageRouteByFrame } from "neweb-core";

export default class Router extends ClassicRouter {
    onInit() {
        this.addRoute(MatchedRoute({ path: "/" }, PageRouteByFrame({ frameName: "index" })));
    }
}
