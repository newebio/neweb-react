import React = require("react");
import { Observable, Subscription } from "rxjs";
export class Renderer extends React.Component<
    {
        component: Observable<React.Component<any>>;
    },
    {
        children?: React.Component<any>;
    }
> {
    state = { children: undefined };
    subscription: Subscription;
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
export default Renderer;
