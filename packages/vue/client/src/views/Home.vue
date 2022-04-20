<template>
  <main class="home">
    <h1>여기는 홈</h1>
    <TodoList/>
  </main>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TodoList from '@/components/TodoList.vue';

@Component({
  components: {
    TodoList,
  },
})
export default class Home extends Vue {}
</script>
