"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const FrameComponent_1 = require("./FrameComponent");
function frameBy(ComponentClass) {
    return (props) => {
        const nProps = props;
        return React.createElement(FrameComponent_1.FrameComponent, Object.assign({}, nProps, { ComponentClass }));
    };
}
exports.frameBy = frameBy;
exports.default = frameBy;
