import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const SET_TODOS = 'SET_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export default new Vuex.Store({
  state: {
    todoData: [
      { id: 1, title: 'SSR 공부', finished: false },
      { id: 2, title: 'GraphQL 공부', finished: false },
    ],
  },
  mutations: {
    [SET_TODOS](state, todoData) {
      state.todoData = todoData;
    },

    [TOGGLE_TODO](state, clickedId: number) {
      const updatedTodos = state.todoData.map((todo) => {
        if (todo.id === clickedId) {
          todo.finished = !todo.finished;
          return todo;
        }
        return todo;
      });
      state.todoData = updatedTodos;
    },
  },
  actions: {},
});
