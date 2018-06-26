import { IFrameViewProps } from "../../..";
import React = require("react");
import { Subscription } from "rxjs";
export class IndexView extends React.Component<
    IFrameViewProps<
        { end: string },
        {
            name: string;
        },
        string,
        string
    >,
    { name: string }
> {
    subscriptions: Subscription[] = [];
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
        return (
            <div>
                Hello, {this.state.name}
                {this.props.params.end}
            </div>
        );
    }
}
export default IndexView;
