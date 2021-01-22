import { v4 as uuid } from 'uuid'
import * as types from '@/store/mutation-types'

export const state = {
  tasks: []
}

export const mutations = {
  [types.ADD_TASK](state, payload) {
    const newTask = {
      id: uuid(),
      name: payload.newTask,
      done: false
    }

    state.tasks.push(newTask)
  },
  [types.REMOVE_TASK](state, index) {
    state.tasks.splice(index, 1)
  }
}

export const actions = {
  addTask({ commit }, task) {
    commit(types.ADD_TASK, task)
  },
  removeTask({ commit }, index) {
    commit(types.REMOVE_TASK, index)
  }
}
