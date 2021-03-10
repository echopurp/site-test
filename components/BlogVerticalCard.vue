
<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 24 : 6"
        class="mx-auto my-6"
        max-width="375"
        min-height="580"
        max-height="580"
      >
            <v-img
              
              height="250"
              :src="page.frontmatter.bannerimage ? page.frontmatter.bannerimage : 'default-banner.jpg' "
            ></v-img> 
          <!-- <div v-if="imageurl === undefined">
            <div v-if="!page.frontmatter.videourl.endsWith('.mp4')" class="iframecard-container ma-12">
              <iframe 
                v-if="page.frontmatter.videourl"
                :src="$withBase(page.frontmatter.videourl)"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
            <div v-if="page.frontmatter.videourl.endsWith('.mp4')"  class="video-container">
              <video class="video" controls>
                <source :src="$withBase(page.frontmatter.videourl)" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          </div> -->
          <v-card-title v-if="page.frontmatter.title" class="blogtitle mr-2">{{page.frontmatter.title}}</v-card-title>

          <v-card-text v-if="page.frontmatter.summary">
            <v-row
              align="center"
              class="mx-0"

            >
              <div class="summary blogsubtitle">{{ page.frontmatter.summary}}</div>
            </v-row>
          </v-card-text>
          <v-card-text v-if="page.frontmatter.date">
            <v-row
              align="center"
              class="mx-0"
            >
              <div class="blogbody">{{ new Date(page.frontmatter.date).toLocaleString()}}</div>
            </v-row>
          </v-card-text>
          <v-card-text class="chipswrapper ma-0 pa-0">
            <v-chip-group
              active-class="deep-purple accent-4 white--text"
              column
              class="ml-4 pa-0"
              v-if="page.frontmatter.tags && page.frontmatter.tags.length > 0"
            >
              <v-chip
                v-for="(tag, index) in page.frontmatter.tags"
                :key="index"
                class="blogbody"
                :color="tag.toLowerCase() === 'video' ? '#FFDA7E' :''"
              >
                {{tag}}
              </v-chip>
            </v-chip-group>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <v-row
              align="center"
              class="ma-0 pa-0"
            >
              <v-img
                class="portrait ml-2"
                :src="page.frontmatter.authorimage ? page.frontmatter.authorimage : '/blog/default-avatar.png'"
              ></v-img>
              <v-col cols="6" class="justify-center ma-0 pa-0" justify="center" align="center">
              <div  v-if="page.frontmatter.author" class="blogsubtitle">{{ page.frontmatter.author}}</div>
                <div v-if="page.frontmatter.jobtitle" class="blogbody">
                  {{ page.frontmatter.jobtitle}}
                </div>
                <div v-if="page.frontmatter.company" class="blogbody">
                  {{ page.frontmatter.company}}
                </div>
                <a 
                  v-if="page.frontmatter.authorlink && page.frontmatter.authorlinktext"
                  v-bind:href="page.frontmatter.authorlink"
                  target="_blank"
                >
                  {{ page.frontmatter.authorlinktext}}
                </a>
              </v-col>
            </v-row>
          </v-card-text>
         </v-card>
      </template>
    </v-hover>
</template>

<script>
export default {
  props: ['page'],
  data: () => ({
    hover: false
  }),
    methods: {
    noop () {

    }
  }
}
</script>


<style scoped lang="stylus">
.iframecard-container iframe {
   border: 0;
   height: 250;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}

.video-container {
    /* width is set as 100% here. any width can be specified as per requirement */
    width: 100%;
    padding-top: 56.25%;
    height: 0px;
    position: relative;
}

.video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.portrait {
  max-width: 100px;
}
.chipswrapper {
  max-height: 45px;
  min-height: 45px;
  overflow: hidden;
}
.summary {
  height: 3rem;
  max-height: 3rem;
  min-height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.blogtitle {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'AvantGardeGothicITCW01Bd', sans-serif;
  word-break:normal;
  line-height: 1.5rem;
  max-height: 5rem;
  min-height: 5rem;
}
.blogsubtitle {
  font-size: 1.1rem;
}
.blogbody {
  font-size: .9rem;
}
</style>
