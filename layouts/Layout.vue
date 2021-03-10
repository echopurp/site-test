<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-if="shouldShowSidebar"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-treeview
        item-key="path"
        item-text="title"
        :items="sidebarItems"
        dense
        open-all
        hoverable
        open-on-click
        activatable
        @update:active="updateActive"
      >
      </v-treeview>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      :color="$page.frontmatter.team ?  '#DCEEFA' :  '#F3FAFD'"
      elevate-on-scroll
      elevation="3"
      class="pr-sm-12 pt-4"
      extended
      extension-height="18"
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="shouldShowSidebar"
      />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4 text--black"
      >
        <routerLink :to="$localePath">
          <img
            height="32"
            :src="$withBase('/img/logo_charcoal_424242.svg')"
            :alt="$siteTitle"
            class="ml-md-12 mt-1"
          >
          <!-- <span
            v-if="$siteTitle"
            ref="siteName"
            :class="{ 'can-hide': $site.themeConfig.logo }"
            class="black--text"
          >{{ $siteTitle }}</span> -->
        </routerLink>
      </v-toolbar-title>
      <v-spacer />
      <!-- <SearchBox class="hidden-xs-only"/> -->
        <v-menu
            v-if="isMobile"
            bottom
            left
            :offset-y="true"
            color="white"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
          <NavLinks class="d-flex flex-column" menuMode="true" />
        </v-menu>
        <NavLinks
          v-if="!isMobile"
          class="d-flex"
        />
    </v-app-bar>
    <v-main>

      <v-row
        no-gutters
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="12"
          md="12"
        >
          <Home v-if="$page.frontmatter.home" />
          <Team v-else-if="$page.frontmatter.team" />
          <Blog v-else-if="$page.frontmatter.blog" />
          <Page
            v-else
            :sidebar-items="sidebarItems"
          >
            <template #top>
              <slot name="page-top" />
            </template>
            <template #bottom>
              <slot name="page-bottom" />
            </template>
          </Page>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Home from '@theme/components/Home.vue'
import SearchBox from '@theme/components/SearchBox.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import Page from '@theme/components/Page.vue'
import { resolveSidebarItems } from '../util'
import Team from '@theme/components/Team.vue'
import Blog from '@theme/components/Blog.vue'
export default {
  props: {
    source: String,
  },
  components: {
    Home,
    Team,
    Page,
    NavLinks,
    SearchBox,
    Blog
  },

  data: () => ({
    dialog: false,
    drawer: null,
    isMobile: false
  }),

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },
    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },
    sidebarItems () {
      const items = resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )

      return items
    },
  },

  methods: {
    updateActive (active) {
      if (active[0] == undefined) return
      const path = active[0].replace('.html', '')

      this.$router.push(path)
    },
    onResize () {
        this.isMobile = window.innerWidth < 600
    }
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },

  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  }
}
</script>


<style lang="stylus">
</style>
<style src="prismjs/themes/prism-okaidia.css"></style>