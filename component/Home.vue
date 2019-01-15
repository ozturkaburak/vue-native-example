<template>
	<nb-container>
		<nb-header>
			<nb-title>Ana Sayfaaaa</nb-title>
		</nb-header>
		<nb-button warning :on-press="restCall"><nb-text>Hadi Bakalım!</nb-text></nb-button>
	</nb-container>
</template>
<script>
	import axios from "axios"
	export default {
		methods:{
			restCall: function(){
				axios.get("https://www.google.com/")
				.then(response => {
					console.log("El Cevap: "+response.data);
				}).catch(error => {
					console.log(error);
				})
			}
		}
	}
</script>
