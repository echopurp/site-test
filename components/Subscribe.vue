<template>
  <section class="cta padded">
    <div class="d-flex justify-center" id="mc_signup">
      <v-row class="row ">
        <v-col class="justify-content-center">
          <div class="titleFont text-center mb-0">Join our community</div>
          <div  class="mt-4 text-center mc_subtitle">Subscribe to join our community, connect with like-minded developers, get early access to our products and</div>
          <div  class="mb-5 text-center mc_subtitle">learn more about our open source projects.</div>
           <!-- Begin Mailchimp Signup Form -->
          <div id="mc_embed_signup mc_signup" class="mt-3 text-center">
            <form action="https://slim.us7.list-manage.com/subscribe/post?u=fe0e07a76cc961db5efea10fe&amp;id=3ee58a059f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
                <div class="mc-field-group">
                    <input type="text" value="Full Name" name="NAME" class="required dataentry mb-2" id="mce-NAME">
                    <input type="email" value="Email Address" name="EMAIL" class="required email dataentry mb-2" id="mce-EMAIL">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button joinusbtn mb-2">
                </div>
                <div id="mce-responses mt-10" class="clear">
                  <div class="response slim-disp-none" id="mce-error-response"></div>
                  <div class="response slim-disp-none" id="mce-success-response"></div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div class="slim-pos-abs-left-m5k" aria-hidden="true"><input type="text" name="b_fe0e07a76cc961db5efea10fe_3ee58a059f" tabindex="-1" value="">
                </div>
              </div>
            </form>
          </div>
        <!--End mc_embed_signup-->
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>

function onFocus (field) {
  if(field.value==field.defaultValue)field.value='';
}
function onBlur (field) {
  if(this.value=='')this.value=this.defaultValue;
}

export default {
   mounted () {
    let mceNAME = document.getElementById('mce-NAME');
    let mceEMAIL = document.getElementById('mce-EMAIL');
    mceNAME.onfocus = function(){
      onFocus(mceNAME);
    };

    mceNAME.onblur = function(){
      onBlur(mceNAME);
    };

    mceEMAIL.onfocus = function(){
      onFocus(mceEMAIL);
    };

    mceEMAIL.onblur = function(){
      onBlur(mceEMAIL);
    };
  },
  methods: {
    //   // max-width: 1000px;
  }
}
</script>

<style scoped lang="stylus">
.mc_subtitle {
  font-family: 'AvantGardeGothicITCW01Bk';
  font-size: 18px;
  font-weight: 600;
}
.cta {
  background-color: #F3FAFD;
  padding:5rem 0 5rem;
  background-image: url(/img/sec7-white-cloud.svg), url(/img/sec7-left-clouds.svg);
  background-position: 105% 10%, -20% 100%;
  background-repeat: no-repeat, no-repeat;
  min-height: 420px;

}
.padded {
  padding:5rem 0;
}
.titleFont {
  font-family: 'AvantGardeGothicITCW01Bd',sans-serif;
  font-size: 48px;
  font-weight: 900;
}
.dataentry {
  border-radius: 8px;
  width:260px;
  height:50px;
  border: #8AC9ED 1px solid;
  color : #048dcb;
  background-color: #fff;
  font-size: 18px;
  font-family: AvantGardeGothicITCW01Bk;
  font-weight: normal;
  padding-left: 8px;
  
}
.joinusbtn {
  background-color: #8AC9ED;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width:260px;
  height:50px;
  border-color: #8AC9ED;
  border: #8AC9ED 1px solid;
  border-radius: 8px;
  font-size: 18px;
  font-family: AvantGardeGothicITCW01Bk;
  font-weight: normal;
  cursor: pointer;
}
.button {
  border-radius: 6px;
}

</style>