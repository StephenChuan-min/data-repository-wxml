import { createApp } from 'vue';
import {
  Button, Toast, Pagination, Icon, Tab, InputNumber, Input, Avatar,
} from '@nutui/nutui-taro';

import '@nutui/nutui-taro/dist/styles/themes/default.scss';
import './app.scss';

const App = createApp({
  onShow(options) {
    console.log(options);
  },
});

const Components = [Button, Toast, Pagination, Icon, Tab, InputNumber, Input, Avatar];

Components.forEach((i) => App.use(i));

export default App;
