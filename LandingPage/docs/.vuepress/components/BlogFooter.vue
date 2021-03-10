
<template>
  <section>
      <v-card
        :class="shadow ? 'footercard mt-12 pt-4 px-4 mb-5' : 'footercard mt-12 pt-4 mb-5'"
        :elevation="shadow === 'true' ? '6' : '0'"
      >
          <v-divider></v-divider>
          <v-card-title v-if="frontmatter.title" class="mx-0 px-0 blogfootertitle mr-2">{{frontmatter.title}}</v-card-title>
          <v-card-text class="px-0 mx-0">
            <v-row
              align="center"
              class="mx-0 mt-1 justify-space-between"   
            >
              <div  v-if="frontmatter.author" class="blogfootersubtitle my-0 py-0">{{ frontmatter.author}}</div>    
              <div class="blogfootersubtitle my-0 py-0">{{ new Date(frontmatter.date).toLocaleString()}}</div>
            </v-row>
          </v-card-text>
         </v-card>
      </section>
</template>

<script>
export default {
  props: ['frontmatter', 'shadow'],
  data: () => ({
    hover: false
  })
}
</script>


<style scoped lang="stylus">
.footercard {
  min-height:"320"
  max-height:"320"
}
.portrait {
  max-width: 100px;
}
.summary {
  height: 3rem;
  max-height: 3rem;
  min-height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.blogfootertitle {
  font-size: 1.2rem;
  font-weight: 600;
  line-height:1.0rem
  font-family: 'AvantGardeGothicITCW01Bk', sans-serif;

}
.blogfootersubtitle {
  font-size: 1.0rem;
  line-height:1.0rem
}
.blogbody {
  font-size: .9rem;
}
</style>
