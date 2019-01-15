<template>
      <nb-container :style="{backgroundColor: '#fff'}">
      <nb-header>
        <nb-title>İçerik Listesi</nb-title>
    </nb-header>

    <scroll-view :on-scroll="(event) => {loadMore(event)
      ,scrollEvent(event)
    }" :scroll-event-throttle="400">
    <nb-list-item avatar v-for="user in users">
      <!-- Card Image starts here -->
      <nb-content padder>
        <nb-card>
          <nb-card-item bordered>
            <nb-left>
              <nb-thumbnail small :source="{uri: user.avatar}"/>
              <nb-body>
                <nb-text>{{user.first_name}} {{user.last_name }}</nb-text>
                <nb-text note>{{user.id}}</nb-text>
              </nb-body>
            </nb-left>
          </nb-card-item> 
          <nb-card-item>
            <nb-body>
              <nb-text>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </nb-text>
            </nb-body>
             </nb-card-item>
          <nb-card-item :style="{ paddingVertical: 0 }" bordered>
            <nb-left>
              <nb-button transparent>
                <nb-icon name="thumbs-up" active></nb-icon>
                <nb-text>4923 Likes</nb-text>
              </nb-button>
            </nb-left>
            <nb-body>
              <nb-button transparent>
                <nb-icon name="chatbubbles" active></nb-icon>
                <nb-text>89 Comments</nb-text>
              </nb-button>
            </nb-body>
            <nb-right>
              <nb-text>11h ago</nb-text>
            </nb-right>
          </nb-card-item>
        </nb-card>
      </nb-content>
      <!-- Card Image finishes here -->
    </nb-list-item>
  </scroll-view>
  <view :style="{flex: 1, justifyContent: 'center'}" >
    <activity-indicator size="large" color="red" v-if="loading"/>
</view>
</nb-container>
</template>

<script>
  import axios from "axios"
  import { Dimensions } from "react-native";
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;
  export default {
    props: {
      navigation: {
        type: Object
      }
    },
    data: function () {
      return {
        loading: false,
        users: [],
        per_page: 2,
        page:1,
        rest_count:1,
        
        stylesObj: {
          cardItemImage: {
            resizeMode: "cover",
            width: deviceWidth / 1.18
          }
        }

        }
      },
    mounted: function () {
      clearInterval(this.interval);
      console.log("mounted. deviceHeight:"+deviceHeight);
      this.getData();
    },

    methods: {
      getData: function () {
       console.log("getData.");
       let uri = 'https://reqres.in/api/users';
       this.loading = true;

       axios.get(uri, {
        params: {
          per_page: this.per_page,
          page:this.page
        }
      }).then((result) => {
        let response = result.data.data;
        console.log("Page: "+this.page+"Per_page: "+this.per_page+"Result: "+JSON.stringify(result.data.data));
        for (let i in response) {
          this.users.push(response[i]);
        }
        this.loading = false;
        this.page+=this.rest_count;
      }).catch((error) => {
        console.log(error)
      })
    },
    loadMore: function (event) {
      console.log("loadMore.");

      let paddingToBottom = 0;
      paddingToBottom += event.nativeEvent.layoutMeasurement.height;
      console.log("if kosulu: "+event.nativeEvent.contentOffset.y >= event.nativeEvent.contentSize.height - paddingToBottom);
      if (event.nativeEvent.contentOffset.y >= event.nativeEvent.contentSize.height - paddingToBottom) {
        this.getData()
      }
    }, scrollEvent:function(event){
      console.log("scrollEvent.");
      console.log("Scroll Event:::");
      console.log("1. layoutMeasurement.height: "+event.nativeEvent.layoutMeasurement.height);
      console.log("2. contentOffset.y: "+event.nativeEvent.contentOffset.y);
      console.log("3. contentSize.height: "+event.nativeEvent.contentSize.height);  
    }
  }
}
</script>