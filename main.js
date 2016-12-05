/**
 * Created by zhouxiong on 16/12/4.
 */

import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

new Vue({
    el: 'body',
    store,
    components: {App}
});
