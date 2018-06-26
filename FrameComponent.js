"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class FrameComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.subscriptions = [];
    }
    componentWillMount() {
        this.subscriptions.push(this.props.params.subscribe((params) => this.setState({ params })));
        this.subscriptions.push(this.props.children.subscribe((children) => this.setState({ children })));
    }
    componentWillUnmount() {
        this.subscriptions.map((s) => s.unsubscribe());
    }
    render() {
        return React.createElement(this.props.ComponentClass, {
            data: this.props.data,
            params: this.state.params,
            controller: this.props.controller,
            children: this.state.children,
            seance: this.props.seance,
        });
    }
}
exports.FrameComponent = FrameComponent;
exports.default = FrameComponent;
