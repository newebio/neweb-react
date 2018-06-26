"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Renderer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { children: undefined };
    }
    componentDidMount() {
        this.subscription = this.props.component.subscribe((children) => this.setState({ children }));
    }
    componentWillUnmount() {
        this.subscription.unsubscribe();
    }
    render() {
        return this.state.children ? this.state.children : null;
    }
}
exports.Renderer = Renderer;
exports.default = Renderer;
