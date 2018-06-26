import React = require("react");
import { FrameComponent } from "./FrameComponent";
import { IViewProps } from "neweb-core";
export function frameBy(ComponentClass: React.ComponentClass, props: IViewProps<any, any, any, any>) {
    const nProps: any = props;
    return React.createElement(FrameComponent, { ...nProps, ComponentClass });
}
export default frameBy;
