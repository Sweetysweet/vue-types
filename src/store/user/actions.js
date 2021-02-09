import { SEND_USER } from './action-types'

export default {
    [SEND_USER]({ commit }, user) {
        console.log(user)
    }
}