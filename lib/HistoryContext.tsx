import React = require("react");
import { IHistory } from "..";

export const HistoryContext = React.createContext<IHistory>(undefined as any);
export default HistoryContext;
