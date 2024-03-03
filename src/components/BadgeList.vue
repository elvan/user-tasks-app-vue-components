<template>
  <section>
    <h2>Available Badges</h2>
    <ul>
      <li>
        <base-badge type="admin" caption="ADMIN"></base-badge>
      </li>
      <li>
        <base-badge type="author" caption="AUTHOR"></base-badge>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}

ul {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin-right: 1rem;
}
</style>
