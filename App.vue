<template>
		<nb-container>
		 	 <tab-nav></tab-nav>
  	</nb-container>
  </template>
 <script>
 	import { Root } from "native-base";
import { TabNavigator } from "vue-native-router";
import HomeScreen from "./component/Home.vue";
import AboutScreen from "./component/About.vue";
import ContentListScreen from "./component/ContentList.vue";

const TabNav = TabNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
	Content: ContentListScreen
    
  },
  {
    tabBarPosition: "bottom",
  }
);
export default {
    components: { TabNav,Root }
}
</script>
<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
