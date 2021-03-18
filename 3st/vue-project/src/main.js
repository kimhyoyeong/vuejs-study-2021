import Vue from 'vue';
import router from './router'//router import

new Vue({
	data: {
		currentRoute: window.location.pathname,//주소값을 넘김
	},
	computed:{
		ViewComponent(){
			return router[this.currentRoute]//현재 주소값을 넘김 '/'
		}
	},
	render(h){return h(this.ViewComponent)}
}).$mount('#app')


/*
 import App from './App.vue'
 
 Vue.config.productionTip = false
 
 new Vue({
 render: h => h(App),
 }).$mount('#app')
 */
