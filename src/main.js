import { createApp } from 'vue';
import App from './App.vue';
import BadgeList from './components/BadgeList.vue';
import BaseBadge from './components/BaseBadge.vue';
import TheHeader from './components/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';

const app = createApp(App);

app.component('the-header', TheHeader);
app.component('base-badge', BaseBadge);
app.component('badge-list', BadgeList);
app.component('user-info', UserInfo);

app.mount('#app');
