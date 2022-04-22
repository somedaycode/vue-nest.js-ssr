<template>
  <main>
    <h1>Todolist SSR</h1>
    <ul>
      <todo-item
        v-for="todo in this.todoData"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
<!--    <input type="text" placeholder="할일을 입력" />-->
<!--    <button>추가하기</button>-->
  </main>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {State} from 'vuex-class';

import TodoItem from '@/components/TodoItem.vue';
import type {Todo} from '@/types';

@Component({
  components: { TodoItem },
})
export default class TodoList extends Vue {
  @State('todoData')
  protected todoData!: Todo[];
}
</script>

<style scoped lang="scss"></style>
