<template>
  <div
  >
  <div class="hero">
    <SectionVisualRight
    subtitle="Because it sucks to go slow at building the apps that power every business."
    title="Developer tools to help create production-ready containers quickly" 
    imageUrl="/img/hero.svg"
    imageHeight="70vh"
    button1Text="Join Our Community"
    button1Link="/#mc_signup"
    button2Text="Get The App"
    target="_blank"
    button2Link="https://github.com/docker-slim/docker-slim"
    button2Target="_blank"
    />
    </div>
    <img src="/img/hero-cloud2.svg" class="hero-cloud-sec1 hidden-xs-only" />
  <Code3Comp />
  <SectionVisualRight
    class="mt-md-15 mb-md-15"
    headline="CONTAINER OPTIMIZATION"
    title="Analyze & Understand" 
    imageUrl="/img/image_-02-1.svg"
    imageHeight="42vh"
    :bullets = "[
    'Evaluate containers using combinations of run-time and static container analysis',
    'Explore container layers, files, instructions and Dockerfile composition',
    'Observe and understand how your containers are constructed and run']"
    />
  <SectionVisualLeft
    headline="CONTAINER COMPOSITION"
    title="Optimize & Validate" 
    imageUrl="/img/composition.svg"
    imageHeight="75vh"
    :bullets = "['Testing and probing capabilities stimulate container behavior during analysis', 
    'Intelligently remove unnecessary files, executables and packages by observing container run-time behavior', 
    'Build functionally equivalent minified containers that deploy and load faster']"
    />
   <SectionVisualRight
    headline="CONTAINER SECURITY"
    title="Harden & Control" 
    imageUrl="/img/slim_ai_web_illustrations_010721-20.svg"
    imageHeight="65vh"
    :bullets = "[
    'Speed up image hardening by removing unnecessary libraries and files',
    'Shrink the container attack surface and eliminate vulnerabilities',
    'Generate AppArmor and Seccomp profiles based on container run-time behavior analysis' ]"
    />   
    <SectionVisualLeft
    headline="DEVELOPER & COMMUNITY FIRST"
    title="Learn & Contribute" 
    imageUrl="/img/slim_ai_web_illustrations_010721-23.svg"
    imageHeight="65vh"
    button1Text="Join Our Community"
    button1Link="/#mc_signup"
    :bullets = "['We are dedicated to making developers’ lives easier through open source software, content, and community','Join our community to collaborate as we share what we learn and create products that are meant to improve the lives of developers around the world']"
    />

    <Content class="theme-default-content custom" />
    <span id="mc_signup"></span>
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import SectionVisualRight from '@theme/components/SectionVisualRight.vue'
import SectionVisualLeft from '@theme/components/SectionVisualLeft.vue'
import Subscribe from '@theme/components/Subscribe.vue'
import Footer from '@theme/components/Footer.vue'
import Code3Comp from '@theme/components/Code3Comp.vue'

export default {
  components: { NavLink , SectionVisualRight, SectionVisualLeft, Code3Comp, Subscribe, Footer},

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style scoped lang="stylus">
.wrap {
  overflow-wrap: word-break;
}
.wordwrap { 
  overflow:wrap;
}
.hero-cloud-sec1 {
  position: absolute;
  top: 610px;
  left: -50px; 
  width: 250px;
  height: auto;
}
.home {
  margin: 0px 0px;
  display: block;
}
.hero {
  text-align: center;
  background-color: $blueBgColor;
  padding: 0 0 0 0;
  min-width: 100vh;
  background-image: url(/img/hero-cloud1.svg);
  background-position: 105% 85%;
  background-repeat: no-repeat;
  min-height:700px;

}

@media (max-width: $MQMobile) {
  .titleFont {
    font-size:30px;
  }

}

@media (max-width: $MQMobileNarrow) {
  .titleFont {
    font-size:30px;
  }
}
@media  (max-width: 985px) {
  .hero-cloud-sec1 {
    display:none;
  }

}
@media (min-width: 985.1px) and (max-width: 1199px) {
  .hero-cloud-sec1 {
    top: 750px;
  }

}
@media (min-width: 1199.1px) {
  .hero-cloud-sec1 {
    top: 740px;
  }

}
</style>
