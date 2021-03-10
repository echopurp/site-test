<template>
 
  <main
    aria-labelledby="main-title"
  >
  <section class="team">
    <div class="container">
      <div class="d-flex">
        <div class="d-flex flex-column col-xs-12 col-md-12 mt-8">
          <p class="titleFont colorDark2 text-center message">We are <span>cloud native</span> and <span>remote first</span>.</p>
        </div>
      </div>
    </div>
  </section>
  <Founders />
  <Investors />
  <Mission />

  <SectionVisualRight
    headline="OPPORTUNITIES"
    title="We are hiring people who…" 
    imageUrl="/img/hiring.svg"
    subtitle="We’d love to tell you more about our open roles!"
    button2Text="Come say hi!"
    button2Link="mailto:jobs@slim.ai"
    :bullets = "[
    'Are passionate about helping developers',
    'Are intellectually curious and self motivated',
    'Seek and destroy inefficiency and friction',
    'Treat others with respect and dignity'
    ]"
    />
    <Content class="theme-default-content custom" />

    <span id="mc_signup"></span>
    <Subscribe />
    <Footer />

  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import SectionVisualRight from '@theme/components/SectionVisualRight.vue'
import SectionVisualLeft from '@theme//components/SectionVisualLeft.vue'
import Founders from '@theme/components/Founders.vue'
import Investors from '@theme/components/Investors.vue'
import Mission from '@theme/components/Mission.vue'
import Subscribe from '@theme/components/Subscribe.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  components: { NavLink , Founders, Investors, Mission, Subscribe, Footer, SectionVisualLeft, SectionVisualRight },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
  // background-color:#8AC9ED; 
}
</script>

<style lang="stylus">
.team span {
  text-decoration: underline;
}
.message {
  padding: 7rem 0;
}
.team {
  background-color: #DCEEFA;
  height: 480px;
}

@media (max-width: $MQMobile) {
  .message {
    max-width: 350px;
  }
}

@media (max-width: $MQMobileNarrow) {
  .message {
    max-width: 350px;
  }
}
@media (min-width: 985.1px) and (max-width: 1199px) {
}
@media (min-width: 1199.1px) {
}
</style>
