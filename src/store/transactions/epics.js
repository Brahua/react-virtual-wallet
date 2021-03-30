import { DELETE_TRANSACTION, GET_TRANSACTIONS, POST_TRANSACTION } from "./action.types";
import { catchError, map, switchMap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";
import { deleteTransactionDone, postTransactionDone, setTransactions } from "./actions";

import TransactionApi from "../../api/transaction.api";
import { of } from "rxjs";

const getTransactionsEpic = (action$) => {
  return action$.pipe(
    ofType(GET_TRANSACTIONS),
    switchMap(({ payload }) =>
      TransactionApi.get(payload.uid).pipe(map((data) => setTransactions(data)))
    )
  );
};

const postTransactionEpic = (action$) => {
  return action$.pipe(
    ofType(POST_TRANSACTION),
    switchMap(({ payload }) =>
      TransactionApi.post(payload.uid, payload.transaction).pipe(
        map(() => postTransactionDone()),
        catchError((error) => of(postTransactionDone(error)))
      )
    )
  );
};

const deleteTransactionEpic = (action$) => {
  return action$.pipe(
    ofType(DELETE_TRANSACTION),
    switchMap(({ payload }) =>
      TransactionApi.delete(payload.uid, payload.transaction.id).pipe(
        map(() => deleteTransactionDone()),
        catchError((error) => of(deleteTransactionDone(error)))
      )
    )
  );
};

export const TransactionsEpics = combineEpics(
  getTransactionsEpic,
  postTransactionEpic,
  deleteTransactionEpic
);
