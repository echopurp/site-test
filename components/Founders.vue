<template>
  <section class="founders slim-pos-rel">
    <img src="/img/team-sec01-twoclouds.svg" class="team-cloud-founders hidden-xs-only" />
    <div class="container mt-12">
      <v-row no-gutters>
        <v-col>
          <div class="section2header titleFont text-center colorDark2">{  Our Founders  }</div>
          <div class="section2subtitle mx-auto mt-10 slimfontbk24 colorDark2">Seasoned developers, entrepreneurs and business leaders.  Passionate about building great software. Helping ALL developers to be their best.</div>  
        </v-col>
      </v-row>
      <v-row class="mt-5" no-gutters>
          <v-row class="mt-md-5 justify-space-around" no-gutters>
            <v-col col="6" class="text-center justify-center align-center mb-4">
              <v-img src="/img/slimai-john-round300.png" height="30vh" contain ></v-img>
              <div class="slimfont22 mt-4">John Amaral</div>
              <div class="text-center columnHeadline mt-3 mb-4">Founding CEO</div>
              <div class="text-center">
                <a href="https://johnslimai.github.io/dockerslimexamples/" target="_blank" class="img-nav-item">
                  <img src="/img/github.svg" class="mt-0 mr-1 slim-va-middle" height="20" />
                </a>
                <a href="https://twitter.com/amaral_john" class="img-nav-item" target="_blank">
                  <img src="/img/twitter.svg" class="mt-0 ml-1 mr-1 slim-va-middle" height="20" />
                </a>
                <a href="https://linkedin.com/in/john-amaral-a359241" class="img-nav-item" target="_blank">
                  <img src="/img/linkedin.svg" class="mt-0 ml-1 slim-va-middle" height="20" />
                </a>
              </div>
            </v-col>
            <v-col col="6" class="text-center justify-center mb-4">
              <v-img src="/img/slimai-kyle-round300.png" height="30vh" contain></v-img>
              <div class="slimfont22 mt-4">Kyle Quest</div>
              <div class="text-center columnHeadline mt-3 mb-4">Founding CTO</div>
              <div class="text-center">
                <a href="https://github.com/kcq" target="_blank" class="img-nav-item">
                  <img src="/img/github.svg" class="mt-0 ml-0 mr-1 slim-va-middle" height="20" />
                </a>
                <a href="https://twitter.com/kcqon" class="img-nav-item" target="_blank">
                  <img src="/img/twitter.svg" class="mt-0 ml-1 slim-va-middle" height="20" />
                </a>
              </div>
            </v-col>
          </v-row>

      </v-row>
    </div>
  </section>
</template>

<style lang="stylus">
.team-cloud-founders {
  position: absolute;
  top: 340px;
  right: -50px; 
  width: 302px;
  height: auto;
}
.slimfontbk24 {
  font-family: 'AvantGardeGothicITCW01Bk';
  font-size: 24px;
  font-weight: 600;
}
.section2header {
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
}
.section2subtitle {
  max-width: 600px;
  text-align: center;
}
.slimfont22 {
  font-family: 'AvantGardeGothicITCW01Bd';
  font-size: 22px;
  font-weight: 900;
}

a.img-nav-item {
  text-decoration: none ;
}
.img-nav-item:hover { 
  color:black;
  cursor:pointer;
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
@media (min-width: 985.1px) and (max-width: 1199px) {
  .team-cloud-founders {
    top: 420px;
  }
}
@media (min-width: 1199.1px) {
  .team-cloud-founders {
    top: 420px;
  }
}
</style>