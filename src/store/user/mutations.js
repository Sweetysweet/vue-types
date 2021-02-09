import {SET_USER} from './mutation-types'

export default {
    [SET_USER](state, payload) {
        state.users = payload
    }
}