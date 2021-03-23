import Vue from 'vue';
import router from './router'//router import

const app = new Vue({
	data: {
		currentRoute: window.location.pathname,//주소값을 넘김
	},
	computed:{
		ViewComponent(){
			return router[this.currentRoute]//라우터 키값에 대응되는 컴포넌트 노출
		}
	},
	render(h){return h(this.ViewComponent)}
}).$mount('#app')

window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname;
});

/*
 import App from './App.vue'
 
 Vue.config.productionTip = false
 
 new Vue({
 render: h => h(App),
 }).$mount('#app')
 */
