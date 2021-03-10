<template>
  <section class="footer">
    <div class="appbar">
      <v-row 
      class="justify-space-between"
      align="center"
      justify="center">
        <v-col cols="12" md="6" class="text-left  justify-start">
          <span >
            <img src="/img/codi_buffer_charcoal.png" height="32" class="slim-va-middle" />
            <span class="slim-va-middle" >
              <a href="mailto:jobs@slim.ai" class="text-nav-item colorDark slimfont15" target="_blank">Remote First — We’re hiring, say hi!</a>
            </span>
          </span>
        </v-col>
        <v-col cols="12" md="6" class="pt-md-0 justify-end text-right ">
          <div>
            <!-- <a href="team.html" class="slim-va-middle text-nav-item colorDark slimfont15 mr-3">team</a> -->
            <a href="https://discord.gg/uBttmfyYNB" target="_blank" class="img-nav-item">
              <img src="/img/discord.svg" height="20" class="mr-3 slim-va-middle" />
            </a>
            <a href="https://github.com/docker-slim/docker-slim" target="_blank" class="img-nav-item">
              <img src="/img/github.svg" height="20" class="mr-3 slim-va-middle" />
            </a>
            <a href="https://twitter.com/slimdevops" class="img-nav-item" target="_blank">
              <img src="/img/twitter.svg"  height="20" class="mr-3 slim-va-middle" />
            </a>
            <a href="https://www.linkedin.com/company/slim-ai-inc/about/" class="img-nav-item" target="_blank">
              <img src="/img/linkedin.svg" height="20" class="slim-va-middle" />
            </a>
            <a href="https://www.youtube.com/channel/UCdGG73JYGHfQO3n_gjdP-oQ" class="img-nav-item ml-1" target="_blank">
              <v-icon large color="grey darken-3">mdi-youtube</v-icon>
            </a>
            <a href="https://www.facebook.com/SlimDevOps" class="img-nav-item ml-1" target="_blank">
              <v-icon medium color="grey darken-3">mdi-facebook</v-icon>
            </a>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
// import PageEdit from '@theme/components/PageEdit.vue'
// import PageNav from '@theme/components/PageNav.vue'

export default {
  // components: { PageEdit, PageNav },
  props: ['pageName']
}
</script>

<style scoped lang="stylus">
.footer {
  background-color: #F3FAFD;
  padding:5rem 5rem 3rem 5rem;
}

.slimfont15 {
  font-family: 'AvantGardeGothicITCW01Bd';
  font-size: 15px;
  font-weight: normal;
}
a.img-nav-item {
  text-decoration: none ;
}
.img-nav-item:hover { 
  color:black;
  cursor:pointer;
}

.slim-va-middle {
  vertical-align: middle;
}
a.text-nav-item {
  text-decoration: none ;
}

a.text-nav-item:hover {
  color:#373A36;
  text-decoration: underline;
  cursor:pointer;
}
a.img-nav-item {
  text-decoration: none ;
}
.colorDark {
  color:#444444 !important;
}
.colorGreyed {
  color:#707070 !important;
}
.colorDark2 {
  color:#373A36 !important;
}


@media (max-width: $MQMobile) {
  .footer {
    padding:2rem 2rem 3rem 2rem;
  }
}

@media (max-width: $MQMobileNarrow) {
  .footer {
    padding:1rem 1rem 2rem 1rem;
  }
}
</style>
