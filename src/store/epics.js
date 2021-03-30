import AppEpics from "./app/epics";
import { AuthEpics } from "./auth/epics";
import { TransactionsEpics } from "./transactions/epics";
import { combineEpics } from "redux-observable";

export default combineEpics(AppEpics, AuthEpics, TransactionsEpics);
