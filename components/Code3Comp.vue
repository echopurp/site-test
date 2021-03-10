<template>
  <section>
    <img v-if="false" src="/img/hero-cloud2.svg" class="hero-cloud-sec2" />
    <div class="container mt-15">
      <v-row justify-center no-gutters>
        <v-col cols="12" class="px-md-16">
          <div class="titleFont colorDark2 text-center mb-3">
            {  optimize_container (automatic=TRUE);  }
          </div>
          <div class="section2subtitle hcenter slimfont18 colorDark2">
            Download and install our cli app to evaluate and optimize your Docker containers. Create smaller, faster, more secure containers quickly.  
          </div>
          <div class="text-center mt-4">
            <v-btn
              depressed
              color="#8AC9ED"
              class="normalCaps buttonStd mb-2"
              href="https://github.com/docker-slim/docker-slim"
              target="_blank"
            >
              Get The App
            </v-btn>
          </div>

          <div class="text-center mx-auto pt-4 pb-0 pt-md-5 pb-md-4">
            <!-- add docker class back if need -->
            <div class="dockers">
              <figure>
                <v-img v-if="imgEvalVis" src="/img/evaluate.png" contain class="rounded  mx-auto" ></v-img>
                <v-img v-if="imgOptVis"  src="/img/optimize.png" contain class="rounded  mx-auto" ></v-img>
                <v-img v-if="imgSecVis"  src="/img/secure.png" contain class="rounded  mx-auto" ></v-img>
              </figure>
            </div>
          </div>
          <v-row no-gutters>
            <v-col cols="12" md="4">
              <div :class="{option: true, yellowdiv: imgEvalVis, bluediv: !imgEvalVis}" @click="showPic('eval')">
                <div class="sec2-ydiv-title">
                  1. Evaluate Containers
                </div>
                <div>
                  Understand Docker container 
                  layers, packages, and files using 
                  the XRAY command.
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div :class="{option: true, yellowdiv: imgOptVis, bluediv: !imgOptVis}" @click="showPic('opt')">
                <div class="sec2-ydiv-title">
                  2. Optimize Containers
                </div>
                <div>
                  Automatically reduce container 
                  image size (typically 10X-30X) using the BUILD command.
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div :class="{option: true, yellowdiv: imgSecVis, bluediv: !imgSecVis}" @click="showPic('sec')">
                <div class="sec2-ydiv-title">
                  3. Secure Containers
                </div>
                <div>
                  Eliminate vulnerabilities, shrink 
                  risk surface. Auto-generate Seccomp 
                  and AppArmor profiles.
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        imgEvalVis: true,
        imgOptVis: false,
        imgSecVis: false
      }
    },
    methods: {
      showPic (active) {
        switch (active) {
          case 'eval':
            this.imgEvalVis = true
            this.imgOptVis = false
            this.imgSecVis = false
          return
          case 'opt':
            this.imgEvalVis = false
            this.imgOptVis = true
            this.imgSecVis = false
          return
          case 'sec':
            this.imgEvalVis = false
            this.imgOptVis = false
            this.imgSecVis = true
          return
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
.sec2-ydiv-title {
  font-family: 'AvantGardeGothicITCW01Bd';
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 8px;
}
.option.bluediv {
  padding: 1rem;
  cursor: pointer;
  background: #FCFDFE;
  border:3px solid #ccc;
  border-radius: 7px;
  color: #989A99;
  font-family: 'AvantGardeGothicITCW01Bk';
  font-size: 16px;
  line-height: 1.6em;;
  font-weight: normal;
  min-height: 140px;
  margin-top: 1rem;
}
.option.yellowdiv {
  padding: 1rem;
  cursor: pointer;
  font-family: 'AvantGardeGothicITCW01Bk';
  font-size: 16px;
  line-height: 1.6em;
  border-radius: 7px;
  font-weight: normal;
  background-color: #FFFEFA;
  border:3px solid #FFDA7E;
  color: #444444;
  min-height: 140px;
  margin-top: 1rem;
}
.rounded {
  border-radius: 8px;
}
.dockers {
  position: relative;
}
.hero-cloud-sec2 {
  position: absolute;
  top: 2245px;
  left: -50px; 
  width: 250px;
  height: auto;
}
.hcenter {
  margin-left: auto;
  margin-right: auto;
}
.slimfont18 {
  font-family: 'AvantGardeGothicITCW01Bk';
  font-size: 18px;
  font-weight: 600;
}
.section2subtitle {
  max-width: 600px;
  text-align: center;
}

@media (min-width: 985.1px) and (max-width: 1199px) {

  .option.bluediv {
    min-height: 180px;
    margin-right: 2px;
  }
  .option.yellowdiv {
    min-height: 180px;
    margin-right: 2px;
  }

}
@media (min-width: 1199.1px) {

  .option.bluediv {
    min-height: 140px;
    margin-right: 4px;
  }
  .option.yellowdiv {
    min-height: 140px;
    margin-right: 4px;
  }

}

</style>
