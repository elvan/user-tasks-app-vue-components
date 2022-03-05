<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list> -->
    <!-- <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
    <!-- <course-goals #default="slotProps">
      <h3>{{ slotProps.goal }}</h3>
      <p>{{ slotProps.anotherProp }}</p>
    </course-goals> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals> -->
    <!-- <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import CourseGoals from './components/CourseGoals.vue';
// import UserInfoVue from './components/UserInfo.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    'the-header': TheHeader,
    // 'badge-list': BadgeList,
    // 'course-goals': CourseGoals,
    // 'user-info': UserInfoVue,
    'active-goals': ActiveGoals,
    'manage-goals': ManageGoals,
  },

  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Elvan Hidayat',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },

  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
