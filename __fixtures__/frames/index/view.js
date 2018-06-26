"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class IndexView extends React.Component {
    constructor() {
        super(...arguments);
        this.subscriptions = [];
    }
    componentWillMount() {
        this.setState({ name: this.props.data.name });
        this.props.controller.onMessage.subscribe((name) => {
            this.setState({ name });
        });
    }
    componentWillUnmount() {
        this.subscriptions.map((s) => s.unsubscribe());
    }
    render() {
        return (React.createElement("div", null,
            "Hello, ",
            this.state.name,
            this.props.params.end));
    }
}
exports.IndexView = IndexView;
exports.default = IndexView;
