<template>
	<div>
		{{count}}
		<ul>
			<li v-for="list in listvue">{{list.name}}</li>
		</ul>
		<button @click="handleAdd">++++</button>
		

	</div>
</template>

<script type="text/javascript">
	import {mapState,mapGetters} from 'vuex'
	import {INCREMENT} from '../vuex/mutation-types';

	export default {
		data(){
			return{
					msg:'nihao'
			}
		},
		methods:{
			handleAdd(){
				this.$store.dispatch("listaction");
				this.$store.commit(INCREMENT,{num:2})//提交一个自定义时间  也就是mutation
			}
		},
		computed:{
			// listvue(){
			// 	return this.$store.getters.listvue
			// },
			...mapGetters(['listvue']),
			reverMsg(){
				return this.msg
			},
			...mapState(['count'])
			// ...mapState({
			// 	counter:state=>state.count
			// })
			// count(){
			// 	return this.$store.state.count
			// }
		}
	}
</script>

<style type="text/css">

</style>