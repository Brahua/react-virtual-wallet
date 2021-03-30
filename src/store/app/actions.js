import { APP_ACTION } from "./action.types";
import { createActions } from "redux-actions";

const actionsCreator = createActions({}, APP_ACTION);
export const { appAction } = actionsCreator;
