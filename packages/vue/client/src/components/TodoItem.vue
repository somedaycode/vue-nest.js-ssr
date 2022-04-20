<template>
  <li :class="{ finished: todo.finished }" @click="toggleJob(todo.id)">
    <span v-html="todo.title" />
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import type { Todo } from '@/types';
import { Mutation } from 'vuex-class';
import { MutationMethod } from 'vuex';
import { TOGGLE_TODO } from '@/store';

@Component({
  name: 'TodoItem',
})
export default class TodoItem extends Vue {
  @Prop({ type: Object, required: true }) todo!: Todo;

  @Mutation(TOGGLE_TODO)
  private toggleJob!: MutationMethod;
}
</script>

<style lang="scss" scoped>
.finished {
  color: gray;
  text-decoration: line-through;
}
</style>
