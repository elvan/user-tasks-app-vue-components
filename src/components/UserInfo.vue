<template>
  <section>
    <header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </header>
    <p>{{ infoText }}</p>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
