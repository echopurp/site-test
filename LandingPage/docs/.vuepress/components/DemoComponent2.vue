<template>
  <section class="wrapper">
    <div class="d-flex borderBoxRed flex-wrap justify-space-around align-center" >
      <div class="d-flex flex-column borderBoxGreen " >
        <div class="d-flex textcontainer borderBoxBlue pr-4" >
          <div class="d-flex flex-column">
            <p class="titleFont">
              Hello this is Left 1
            </p>
            <p class="subTitleFont">
              this is Left 2
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column borderBoxBlue ">
        <v-img
        class="pl-10"
          :src="$withBase('/img/hero.svg')"
          contain
        ></v-img>
      </div>
    </div>
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
