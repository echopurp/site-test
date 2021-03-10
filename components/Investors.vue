<template>
  
  <section class="padded">
    <div class="titleFont colorDark2 text-center mb-5"><span>{ Investors }</span></div>
    <div class="container pt-md-5 investors">
      <v-row class="align-items-center justify-space-between" no-gutter>
        <v-col cols="12" md="2" class="text-center mr-1">
          <a href="https://www.boldstart.vc" target="_blank">
              <img src="/img/boldstart.png" class="vcimg" />
          </a>
        </v-col>
        <v-col cols="12" md="2" class="text-center">
          <a href="https://www.decibel.vc" target="_blank">
              <img src="/img/decibel.png" class="vcimg"  />
          </a>
        </v-col>
        <v-col cols="12" md="2" class="text-center">
          <a href="https://www.fxpventures.com" target="_blank">
            <img src="/img/FXP.png"  class="vcimg" />
          </a>
        </v-col>
        <v-col cols="12" md="2" class="text-center">
          <a href="https://www.founderpartners.vc" target="_blank">
              <img src="/img/techaviv.png" class="vcimg"  />
          </a>
        </v-col>
      </v-row>
    </div>
  </section>

</template>

<style scoped lang="stylus">

.padded {
  padding:0rem 0;
}
.investors div a {
  display: block;
  padding: 2rem 0 0 0;
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
  .vcimg {
    width: 15vw;
  }
}
@media (min-width: 1199.1px) {

}
</style>