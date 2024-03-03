<template>
  <span class="badge" :class="classes">{{ caption }}</span>
</template>

<script>
export default {
  props: ['type', 'caption'],
  computed: {
    classes() {
      return {
        'badge--admin': this.type === 'admin',
        'badge--author': this.type === 'author',
      };
    },
  },
};
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  color: #2e2e2e;
  background-color: #ccc;
}

.badge--admin {
  color: white;
  background-color: #810036;
}

.badge--author {
  color: white;
  background-color: #002c8a;
}
</style>
