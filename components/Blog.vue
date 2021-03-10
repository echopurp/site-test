<template>
  <div>
    <v-row no-gutters justify="center" class='blogtitleFont mt-8'>
      <h1>The Slim Blog</h1>
    </v-row>
    <v-row no-gutters
    v-for="(row,rowindex) in fileRows" 
    :key="rowindex"
    justify="center">
      <v-col
        v-for="(page,pageindex) in row"
        :key="pageindex"
       >
       <a v-bind:href="page.path">
        <!-- <div v-if="page.frontmatter.jobtitle === 'Third one in'">hello</div> -->
        <BlogVerticalCard :page="page" />
        </a>
       </v-col>
    </v-row>
    <span id="mc_signup"></span>
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import Subscribe from '@theme/components/Subscribe.vue'
import Footer from '@theme/components/Footer.vue'
import BlogVerticalCard from '@theme/components/BlogVerticalCard.vue'
export default {
  components: { BlogVerticalCard, Subscribe, Footer },
  data: () => ({
    fileRows: []
  }),
  methods: {
    compareByDate: function (a, b) {
      let result = 0;
      if (a.frontmatter.date > b.frontmatter.date) {
        result = -1;
      } else if (a.frontmatter.date < b.frontmatter.date) {
        result = 1;
      }
      return result;
    },
    files () {
     const pages = this.$site.pages
        .filter(p => { 
          return p.path.indexOf('/blog/') >= 0 && p.relativePath !== 'blog/README.md';
        });
        pages.sort(this.compareByDate)
        //consoleLogJSON(pages);
        const str = JSON.stringify(pages, null, 2)
        // console.log(str)
      return pages; 
    },
    makeFileRows () {
      try {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        const filearr = this.files()
        const columns = []
        let cols = 1
        if (vw > 1600) {
          cols = 4
        } else if (vw > 1200 ) {
          cols = 3
        } else if (vw > 800 ) {
          cols = 2
        } 
        while (filearr.length > 0) {
          columns.push(filearr.splice(0, cols));
        }
          
        this.fileRows = columns
      } catch (err) {
      }
    }
  },
 mounted() {
    this.$nextTick(() => {
      this.makeFileRows() 
      window.addEventListener("resize", this.makeFileRows);
    })
  },
  beforeDestroy() { 
    window.removeEventListener("resize", this.makeFileRows);
  },
  computed: {
  }
}
</script>

<style scoped lang="stylus">
.blogtitleFont {
  font-family: 'AvantGardeGothicITCW01Bd',sans-serif;
  font-size: 48px;
  font-weight: 900;
}
h1 {
  font-family: 'AvantGardeGothicITCW01Bd',sans-serif;
  font-size: 48px;
  font-weight: 900;
}
@media (max-width: $MQMobile) {
  .blogtitleFont {
    font-size:24px;
  }

}

@media (max-width: $MQMobileNarrow) {
  .blogtitleFont {
    font-size:24px;
  }
}
</style>