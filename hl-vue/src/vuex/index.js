import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import {INCREMENT} from '../vuex/mutation-types';
import axios from 'axios';
//创建仓库实例
var store = new Vuex.Store({
	state:{
		count:1,
		list:[
			
		]
	},
	getters:{//配置从state中派生出来的数据
		listvue(state){
			return state.list.filter(function(item){
				return item.vuex;
			})
		}
	},
	mutations:{//配置改变仓库state的地方，在这里面必须是同步函数，不能出现异步
		//mutation的事件名为常量的好处是：防止重名，方便修改
		[INCREMENT]:function(state,num){//increment相当于时间名，参数是state
			state.count += num.num
		}
	},
	actions:{//用来做异步操作的地方，成功后commit mutation
		listaction({commit}){//回调函数的参数是一个和store具有相同属性的对象
			axios.get('/api/action').then((res)=>{
				console.log(res)
			})
		}
	}
})
export default store