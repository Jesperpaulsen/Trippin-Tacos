<template>
  <v-content>
    <section>
      <v-parallax
        src="Chicken-Tinga-Taco.jpeg"
        height="800"
      >
        <v-toolbar
          dark
          class="transparent"
          flat
          tabs
        >
          <v-spacer />
          <!--<v-toolbar-items>
            <v-btn
              flat
              to="/"
              exact
            >
              Hjem
            </v-btn>
          </v-toolbar-items>-->
          <v-toolbar-items>
            <v-btn
              flat
              to="/menu"
              exact
            >
              Meny
            </v-btn>
          </v-toolbar-items>
          <v-toolbar-items>
            <v-btn
              flat
              to="/customer-reservation"
              exact
            >
              Bordbestilling
            </v-btn>
          </v-toolbar-items>
          <v-toolbar-items>
            <v-btn
              flat
              to="/login"
              exact
            >
              Logg inn
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <img
            src="logo-clean.png"
            alt="Vuetify.js"
            height="170"
            class="my-3"
          >
          <h1
            class="white--text mb-4"
            style="font-weight: initial; line-height: 50px; font-size: 80px"
          >
            TRIPPIN TACOS
          </h1>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="mb-5"
        align-center
      >
        <!--<v-flex
          xs12
          sm4
          class="my-0"
        >
         <div class="text-xs-center">
            <h2 class="headline">
              Autentisk meksikansk mat i hjertet av Trondhiem
            </h2>
            <span class="subheading">
              Cras facilisis mi vitae nun
            </span>
          </div>
        </v-flex>-->
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout
              row
              wrap
            >
              <v-flex
                xs12
              >
                <div class="headline text-xs-center">
                  Om oss
                </div>
              </v-flex>
            </v-layout>
            <v-layout
              row
              wrap
              align-start
            >
              <v-flex
                xs6
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text>
                    <b>Autentisk meksikansk mat i Trondheim</b>
                    med kjøtt og fisk fra lokale leverandører og den sterkeste chilien fra Mexico, er maten kortreist og tradisjonstro.
                    Hos oss er all mat laget fra grunnen. I en behagelig og upretensiøs atmosfære ønsker vi at gjestene våre blir
                    sittende og nyte den autentiske følelsen av Mexico.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex
                xs6
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text>
                    Enten du ønsker vår landsberømte pesca-pescatarianske rett, eller matchende tequila- og mezcaldrinker, er den gode stemningen hos oss et resultat av en dyktig og engasjert stab, men mer enn
                    noe er det gjestene og latteren som sitter løst som definerer oss - akkurat slik det skal være på en skikkelig tacobar. Salud!
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax
        src="1234567.jpg"
        height="380"
      >
        <v-layout
          column
          align-center
          justify-center
        >
          <div class="headline white--text mb-3 text-xs-center">
            Utforsk vår meny
          </div>
          <v-btn
            class="brown lighten-2 lighten-2 mt-3 roundedCorners"
            dark
            large
            href="/menu"
          >
            Meny
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout
            row
            wrap
            align-start
            class="mt-5"
          >
            <v-flex
              sm4
              xs12
            >
              <v-card class="elevation-0 transparent">
                <v-card-title
                  primary-title
                  class="layout"
                >
                  <div class="headline">
                    Våre åpningstider
                  </div>
                </v-card-title>
                <v-card-text>
                  <p style="font-weight: bold">
                    Middag
                  </p>
                  <p>Mandag - søndag: 12 - 24</p>
                  <p style="font-weight: bold">
                    Happyhour
                  </p>
                  <p>Torsdag & Fredag: 16 - 22</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex
              xs12
              sm4
            >
              <v-card class="elevation-0 transparent">
                <v-card-title
                  primary-title
                  class="layout"
                >
                  <div class="headline">
                    Kontakt oss
                  </div>
                </v-card-title>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="brown--text text--lighten-2">
                        phone
                      </v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>93 48 38 98</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="brown--text text--lighten-2">
                        place
                      </v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Kongens gate 14, Trondheim </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="brown--text text--lighten-2">
                        email
                      </v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        <a
                          href="mailto:tacosbetrippin@gmail.com"
                          target="_top"
                        >
                          tacosbetrippin@gmail.com
                        </a>
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
            <v-flex
              xs12
              sm4
            >
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    id="gmap_canvas"
                    width="400"
                    height="250"
                    src="https://maps.google.com/maps?q=trondheim%2C%20kongens%20gate%2014&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="9"
                    marginwidth="0"
                  />
                </div>
                <style>
                  .mapouter{position:relative;text-align:right;height:323px;width:450px;}
                  .gmap_canvas {overflow:hidden;background:none!important;height:323px;width:450px;}
                </style>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </section>

    <v-footer
      class="brown lighten-2"
      height="60"
    >
      <v-layout
        row
        wrap
        align-center
      >
        <v-flex xs12>
          <div class="text-xs-center white--text">
            Lagd med
            <v-icon class="red--text">
              favorite
            </v-icon>
            av PU-Gruppe 30
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-content>
</template>

<script>

export default {
  layout: 'index',
  data () {
    return {
      items: [
        {
          src: 'taco.jpg'
        },
        {
          src: 'burrito-chicken-close-up-461198.jpg'
        },
        {
          src: 'buffet-food-lunch-5944.jpg'
        },
        {
          src: 'taco123.jpg'
        },
        {
          src: 'taco6.jpg'
        }
      ]
    }
  },
  methods: {
    hello123 () {
      return 'wassop'
    }
  }
}
</script>

<style scoped>
  .roundedCorners {
    border-radius: 0px 18px 0px 18px;
  }
</style>
