"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_core_1 = require("neweb-core");
const react_test_renderer_1 = require("react-test-renderer");
const React = require("react");
const sleep_es6_1 = require("sleep-es6");
const Renderer_1 = require("../Renderer");
const rxjs_1 = require("rxjs");
const frameBy_1 = require("../frameBy");
describe("simple", () => {
    it("simple", () => __awaiter(this, void 0, void 0, function* () {
        const children = new rxjs_1.Subject();
        const app = react_test_renderer_1.create(React.createElement(Renderer_1.Renderer, { component: children }));
        const renderer = new neweb_core_1.ClientPageRenderer({
            RendererComponentsFactory: {
                create: (frameName, props) => {
                    return frameBy_1.frameBy(require(__dirname + "/../__fixtures__/frames/" + frameName + "/view").default)(props);
                },
            },
            renderRootComponent: (component) => {
                children.next(component);
            },
            replaceRootComponent: (component) => {
                children.next(component);
            },
        });
        renderer.newPage({
            extraInfo: {},
            frames: [
                {
                    frameId: "frameId1",
                    data: { name: "NewebReact" },
                    frameName: "index",
                    frames: {},
                    params: { end: "!" },
                },
            ],
            rootFrame: "frameId1",
            url: "/",
        });
        yield sleep_es6_1.default(10);
        expect(app.toJSON()).toMatchSnapshot();
        renderer.onControllerMessage.next({ id: "frameId1", message: "NewName" });
        yield sleep_es6_1.default(10);
        expect(app.toJSON()).toMatchSnapshot();
    }));
});
