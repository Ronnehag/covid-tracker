<template>
  <div class="container" v-if="datacollection">
    <div v-if="country">
      <bar-chart :chart-data="countryData"></bar-chart>
    </div>
    <div v-else>
      <line-chart :chart-data="datacollection"></line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from "./LineChart.js";
import BarChart from "./CircleChart.js";
import { fetchDailyData } from "../services/coronaService";

export default {
  name: "Chart",
  props: ["data", "country"],
  components: {
    LineChart,
    BarChart
  },
  data() {
    return {
      datacollection: null,
      countryData: null
    };
  },
  async mounted() {
    this.datacollection = await fetchDailyData();
    this.fillData();
  },
  watch: {
    country: function(newVal, oldVal) {
      if (newVal != oldVal) {
        this.fillBar();
      }
    }
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.datacollection.map(({ date }) => date),
        datasets: [
          {
            data: this.datacollection.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "rgba(187, 134, 252, 1)",
            backgroundColor: "rgba(187, 134, 252, 0.5)",
            fill: true
          },
          {
            data: this.datacollection.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "rgba(255, 0, 0, 1)",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true
          }
        ]
      };
    },
    fillBar() {
      this.countryData = {
        labels: ["Infected", "Recovered", " Deaths"],
        datasets: [
          {
            label: "# of People",
            backgroundColor: [
              "rgba(187, 134, 252, 0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)"
            ],
            data: [
              this.data.confirmed.value,
              this.data.recovered.value,
              this.data.deaths.value
            ]
          }
        ]
      };
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 100px;
  margin: 0 auto;
  max-width: 900px;
}
</style>
