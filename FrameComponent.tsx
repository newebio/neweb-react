import React = require("react");
import { IViewProps } from "neweb-core";
import { Subscription } from "rxjs";
import { IFrameViewProps } from ".";
type AnyViewProps = IViewProps<any, any, any, any>;
export class FrameComponent extends React.Component<
    AnyViewProps & {
        ComponentClass: React.ComponentClass<IFrameViewProps<any, any, any, any>>;
    },
    {
        params: any;
        children: { [index: string]: any };
    }
> {
    subscriptions: Subscription[] = [];
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
export default FrameComponent;
