import { IViewProps } from "neweb-core";
import { FrameComponent } from "./FrameComponent";

export interface IFrameViewProps<PARAMS, DATA, INPUT, OUTPUT> {
    data: DATA;
    params: PARAMS;
    controller: IViewProps<PARAMS, DATA, INPUT, OUTPUT>["controller"];
    children: { [index: string]: FrameComponent };
    seance: IViewProps<PARAMS, DATA, INPUT, OUTPUT>["seance"];
}
export { FrameComponent } from "./FrameComponent";
export { frameBy } from "./frameBy";
export { Renderer } from "./Renderer";
