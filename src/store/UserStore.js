export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
    }
    setIsAuth(param) {
        this._isAuth = param
    }
    setIsUser(user) {
        this._user = user
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}