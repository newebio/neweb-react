import React = require("react");
import HistoryContext from "./HistoryContext";
import { IHistory } from "..";

export function withHistory(Component: React.ComponentClass<any>) {
    return (props: any) => {
        return React.createElement(HistoryContext.Consumer, {
            children: (history: IHistory) =>
                React.createElement(Component, {
                    history,
                    ...props,
                }),
        });
    };
}
export default withHistory;
