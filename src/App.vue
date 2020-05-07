<template>
  <div id="app" md-theme="default-dark">
    <h1>
      C<i class="fas fa-virus"></i>VID-19 TRACKER
    </h1>
    <div v-if="data">
      <Cards :data="data" />
      <CountryFilter @change="handleCountryChange" />
      <div class="md-layout md-alignment-center">
        <div class="md-layout-item md-small-size-100 md-medium-size-90">
          <Chart :data="data" :country="country" />
        </div>
        <div class="md-layout-item md-small-size-100 md-medium-size-10" v-if="country">
          <CoronaTotal 
          :totalDeaths="this.globalData.deaths.value"
          :totalRecovered="this.globalData.recovered.value"
          :totalInfected="this.globalData.confirmed.value"
          :data="data"
          :country="country" />
        </div>
      </div>
    </div>
    <footer class="footer">
      Source | <a href="https://covid19.mathdro.id/api" target="_blank">https://covid19.mathdro.id/api</a>
    </footer>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import Chart from "@/components/Chart.vue";
import CoronaTotal from "@/components/CoronaTotal.vue";
import CountryFilter from "@/components/CountryFilter";
import { fetchData } from "@/services/coronaService";

export default {
  name: "App",
  components: {
    Cards,
    Chart,
    CountryFilter,
    CoronaTotal
  },
  data() {
    return {
      data: null,
      globalData : null,
      country: null
    };
  },
  async created() {
    this.data = await fetchData();
    this.globalData = this.data;
  },
  methods: {
    async handleCountryChange(val) {
      this.data = await fetchData(val);
      this.country = val;
    }
  }
};
</script>

<style lang="scss">
#app {
  text-align: center;
  margin-top: 60px;
  padding-bottom: 100px;
}
.chart {
  padding-top: 100px;
}
h1 {
  font-size: 3em;
  padding-bottom: 30px;
}
i {
  color: rgba(187, 134, 252, 1);
}
.footer{
  margin-top: 100px;

}

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: rgba(187, 134, 252, 1),
  accent: md-get-palette-color(red, A200), // The accent or secondary color
  theme: dark // This can be dark or light
));

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>
