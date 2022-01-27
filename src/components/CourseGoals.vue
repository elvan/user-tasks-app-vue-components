<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :goal="goal" anotherProp="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['Learn Vue.js', 'Learn Vuex', 'Learn Vue Router'],
    };
  },
};
</script>
