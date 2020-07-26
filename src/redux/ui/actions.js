import { UI_SET_ERROR, UI_REMOVE_ERROR, UI_START_LOADING, UI_FINISH_LOADING } from "./action-type"

export const setError = (messageError) => ({
  type: UI_SET_ERROR,
  payload: messageError
})

export const removeError = () => ({ type: UI_REMOVE_ERROR })

export const startLoading = () => ({ type: UI_START_LOADING })

export const finishLoading = () => ({ type: UI_FINISH_LOADING })