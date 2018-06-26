import { ClientPageRenderer } from "neweb-core";
import { FrameComponent } from "../FrameComponent";
import { create } from "react-test-renderer";
import React = require("react");
import sleep from "sleep-es6";
import { Renderer } from "../Renderer";
import { Subject } from "rxjs";
import { frameBy } from "../frameBy";
describe("simple", () => {
    it("simple", async () => {
        const children = new Subject<React.Component>();
        const app = create(<Renderer component={children} />);
        const renderer = new ClientPageRenderer({
            RendererComponentsFactory: {
                create: (frameName: string, props) => {
                    return frameBy(
                        require(__dirname + "/../__fixtures__/frames/" + frameName + "/view").default,
                        props,
                    );
                },
            },
            renderRootComponent: (component: FrameComponent) => {
                children.next(component);
            },
            replaceRootComponent: (component: FrameComponent) => {
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
        await sleep(10);
        expect(app.toJSON()).toMatchSnapshot();
        renderer.onControllerMessage.next({ id: "frameId1", message: "NewName" });
        await sleep(10);
        expect(app.toJSON()).toMatchSnapshot();
    });
});
