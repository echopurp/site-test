
<template>
  <section>
      <v-card
        :class="shadow ? 'mt-10 mb-8 mx-0 px-4' : 'mt-10 mb-8 mx-0 px-0'"
        min-height="300"
        max-height="600"
        :elevation="shadow === 'true' ? '6' : '0'"
      >
          <v-card-title v-if="frontmatter.title" class="px-0 mx-0"><h1>{{ frontmatter.title }}</h1></v-card-title>
          <v-card-text v-if="frontmatter.summary" class="px-0 mx-0">
            <v-row
              align="center"
              class="px-0 mx-0 mt-3"
            >
              <h2 class="blogsubtitle">{{ frontmatter.summary }}</h2>
            </v-row>
          </v-card-text>

          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="ma-0 pa-0">
            <v-row
              align="start"
              class="px-0 mx-0 mt-0 mb-0"
              justify="start"
            >
               <v-col cols="2"  justify="start" align="start">
               </v-col>
              <v-col cols="6"  justify="center" align="center">
              </v-col>
              <v-col cols="4"  justify="start" align="end">
                 <div class="blogheaderbody">{{ new Date(frontmatter.date).toLocaleString()}}</div>

              </v-col>
            </v-row>
          </v-card-text>
          <v-divider ></v-divider>
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
.blogheaderportrait {
  max-width: 70px;
}
h2 {
  height: 4rem;
  max-height: 4rem;
  min-height: 4rem;
  word-break:normal;
}
h1 {
  font-size: 48px;
  line-height: 52px;
  font-weight: 900;
  font-family: 'AvantGardeGothicITCW01Bd', sans-serif;
  word-break:normal;
}
.blogsubtitle {
  font-size: 1.5rem;
  
}
.blogheaderbody {
  font-size: .9rem;
}

.pageBoxed {
  max-width: 720px;
  padding-left: 8px;
  padding-right:8px;
}
</style>
