<template>
  <section class="wrapper">
    <v-row class="wrapper borderBoxRed" dense align="center">
      <v-col md="6" class="borderBoxGreen " align="end">
        <div class="textcontainer borderBoxBlue pr-4" >
          <v-col align="start">
            <p class="titleFont">
              Hello this is Left 1
            </p>
            <p class="subTitleFont">
              this is Left 2
            </p>
          </v-col>
        </div>
      </v-col>
      <v-col md="6" class="borderBoxBlue ">
        <v-img
        class="pl-10"
          :src="$withBase('/img/hero.svg')"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </section>
</template>

<style lang="stylus">
.wrapper {
  min-height: 500px;
}
.textcontainer {
  display: inline-block;
}
</style>
