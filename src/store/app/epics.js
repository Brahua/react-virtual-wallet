import { APP_ACTION } from "./action.types";
import { empty } from "rxjs";
import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";

const appEpic = (action$) =>
  action$.pipe(
    ofType(APP_ACTION),
    switchMap(({ payload }) => empty())
  );

export default function AppEpics(action$) {
  return appEpic(action$);
}
