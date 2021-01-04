import {createSelector} from "reselect";

const auth = (state) => {
    return state.auth.isAuth
}

export const isAuth = createSelector(
    auth,
    (isAuth) => {
    return isAuth;
})