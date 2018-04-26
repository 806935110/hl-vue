<template>
	<div class="login">
		<input type="text" name="">
		<button @click="handleLogin">登录</button>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				name:"hl"
			}
		},
		methods:{
			handleLogin(){
				console.log("你好")
			}
		}
	}
</script>

<style type="text/css">
.login{
	border:1px solid red;
}
</style>