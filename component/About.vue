<template>
	<nb-container>
		<nb-header>
			<nb-title>Hakkımızda</nb-title>
		</nb-header>
		<!-- scroll view starts -->
 <scroll-view>
    <nb-list-item>
      <!-- Card Image starts here -->
      <nb-content padder>
        <nb-card>
          <nb-card-item bordered>
            <nb-left>
              <nb-thumbnail/>
              <nb-body>
                <nb-text>Ahmet Burak</nb-text>
                <nb-text note>458571</nb-text>
              </nb-body>
            </nb-left>
          </nb-card-item> 
          <nb-card-item>
            <nb-body>
              <nb-text>
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </nb-text>
            </nb-body>
            <!--<image :source="cardImage" class="card-item-image" :style="stylesObj.cardItemImage"/>-->
             
          </nb-card-item>
          <nb-card-item :style="{ paddingVertical: 0 }" >
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
		<!-- scroll view ends -->
		</nb-container>
	</template>
