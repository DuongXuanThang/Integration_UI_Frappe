import './index.css'
import { createApp } from 'vue'
import store from "./store";
import router from './router'
import App from './App.vue'

import {
    FrappeUI,
    Button,
    onOutsideClickDirective,
    setConfig,
    frappeRequest,
  } from "frappe-ui";

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(FrappeUI);
app.component('Button', Button)
app.directive('on-outside-click', onOutsideClickDirective)
app.mount('#app')


