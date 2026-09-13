import { createApp } from 'vue';
import StatusBar from './StatusBar.vue';
import { waitForTavernHelper, waitForMvu } from '@util/mvu';

// 等待酒馆助手和MVU加载完成
Promise.all([waitForTavernHelper(), waitForMvu()]).then(() => {
  const app = createApp(StatusBar);
  app.mount('#app');
});
