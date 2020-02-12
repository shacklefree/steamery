import {
  auth,
  githubAuthProvider,
  googleAuthProvider
} from "../../clients/firebase"

// import * as types from '../constants/ActionTypes'
// import { updateUser } from './users'

export const types = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT_REQUEST: "LOGIN_REQUEST",
  LOGOUT_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT_FAILURE: "LOGIN_FAILURE"
}

export const loginSuccessAction = (uid: string, userData: any) => ({
  type: types.LOGIN_SUCCESS,
  uid,
  userData
})

export const loginFailureAction = (error: any) => ({
  type: types.LOGIN_FAILURE,
  error
})

export const logoutSuccesAction = () => ({
  type: types.LOGOUT_SUCCESS
})

export const initAuth = () => {
  console.log("init auth")
  return (dispatch: any) => {
    return auth.onAuthStateChanged(user => {
      if (user) {
        // user authenticated, update redux
        if (user) {
          const userData = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          }
          console.log({ userData, user })
          dispatch(loginSuccessAction(user.uid, userData))
          // TODO make this conditional
          // return dispatch(updateUser(userData))
        }
      }
    })
  }
}

export const loginAnonymously = () => {
  return (dispatch: any) => {
    return auth
      .signInAnonymously()
      .then(() => {
        // console.log(response);
        // const { user } = response
        // if (user) {
        // 	const displayName = user.displayName || 'Ninja'
        // 	return dispatch(loginSuccess(user.uid, displayName))
        // }
      })
      .catch(function(error) {
        console.log({ error })

        return dispatch(loginFailureAction({ error }))
      })
  }
}

export const loginWithProvider = (providerName: "google" | "github") => {
  return (dispatch: any) => {
    // pick login provider
    let provider = null
    if (providerName === "github") {
      provider = githubAuthProvider
    } else if (providerName === "google") {
      provider = googleAuthProvider
    } else {
      return Promise.reject("Invalid auth provider")
    }

    return auth
      .signInWithPopup(provider)
      .then(response => {
        const { user } = response
      })
      .catch(function(error) {
        console.log({ error })

        return dispatch(loginFailureAction({ error }))
      })
  }
}

export const logout = () => {
  return (dispatch: any) => {
    return auth.signOut().then(() => {
      console.log("log out!!!")
      dispatch(logoutSuccesAction())
    })
  }
}
