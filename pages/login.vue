<template>
  <v-container>
    <v-layout
      column
      justify-center
      align-center
    >
      <img
        src="logo-long.png"
        height="120px"
        contain
        style="margin-bottom:30px"
      >
      <v-flex
        xs12
        sm5
        md5
      >
        <!-- Kommentar -->
        <div class="loginbox">
          <form @submit.prevent="onSignin">
            <v-card-text>
              <v-text-field
                id="username"
                v-model="email"
                class="roundedCorners"
                prepend-inner-icon="person"
                name="login"
                label="Email"
                type="email"
                required
              />
              <v-text-field
                id="password"
                v-model="password"
                class="roundedCorners"
                prepend-inner-icon="lock"
                name="password"
                label="Passord"
                type="password"
                required
              />
            </v-card-text>
            <div class="text-xs-center">
              <v-btn
                id="loginBtn"
                type="submit"
                :disabled="loading"
                :loading="loading"
                large
                color="#6BE096"
                class="roundedCorners"
              >
                Logg inn
              </v-btn>
            </div>
          </form>
          <div class="text-xs-center">
            <v-btn
              color="grey lighten-1"
              class="roundedCorners forgotPW"
              @click="$router.push('/customerRegistration')"
            >
              Opprett bruker
            </v-btn>
            <v-btn
              color="grey lighten-1"
              class="roundedCorners forgotPW"
              @click="$router.push('/forgot-password')"
            >
              Glemt passord
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-snackbar
        v-model="snackbar"
        top
      >
        {{ error }}
        <v-btn
          color="pink"
          flat
          @click="onDismissed"
        >
          Lukk
        </v-btn>
      </v-snackbar>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'frontpage',
  data () {
    return {
      email: '', // Email til brukeren
      password: '', // Passord til brukeren
      snackbar: false // Om snackbaren skal være synlig eller ei. TODO: FLytte denne over til en global snackbar
    }
  },
  // Henter vaiabler fra storen
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  // Følger med på å om vi skal logge inn eller ikke
  watch: {
    user (val) {
      if (val !== null && val !== undefined) {
        if (this.user.customer === true) this.$store.dispatch('mountUsersReservations', this.user)
        this.$router.push('/dashboard')
      }
    },
    error () {
      this.snackbar = true
    }
  },
  methods: {
    // Hvis brukeren lukker snackbaren
    onDismissed () {
      this.$store.dispatch('clearError')
      this.snackbar = false
    },
    // Kaller på sotren for å logge oss inn
    onSignin () {
      this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
      this.$store.dispatch('mountReservations')
      // this.$store.dispatch('mountTables')
    }
  }
}
</script>

<style scoped>
  .loginbox{
    max-height:350px;
    width: 450px;
    padding:25px;
    background-color: #f5f5f5;
    border-radius: 0px 36px 0px 36px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .roundedCorners {
    border-radius: 0px 18px 0px 18px;
  }
  .forgotPW {
    font-size: smaller;
  }
</style>
