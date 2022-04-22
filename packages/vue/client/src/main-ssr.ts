import Vue from 'vue';
import App from './App.vue';

import createRouter from './router';
import createVuexStore from './store';

export default (context:any) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const router = createRouter();
    const store = createVuexStore();
    const {url} = context;

    await router.push(url);

    router.onReady(() =>
      resolve(
        new Vue({
          router,
          store,
          render: (h) => h(App),
        }),
      ),
    );
  });
};
