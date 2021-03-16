<template>
  <main class="fill-height mx-auto">
    <div class="pageBoxed fill-height mx-auto ">
    <v-card class="px-0 py-0 " elevation="0">
      <slot name="top" />
      <Content class="theme-default-content" />
      <slot name="bottom" />
    </v-card>
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
    </div>
    <span id="mc_signupblog" ></span>
    <Subscribe class="mt-1" />
    <Footer />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import Subscribe from '@theme/components/Subscribe.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  components: { PageEdit, PageNav, Subscribe, Footer },
  props: ['sidebarItems']
}
</script>

<style scoped lang="stylus">
.pageBoxed {
  max-width: 720px;
  padding-left: 8px;
  padding-right:8px;
}
</style>
