<template>
  <div>
    <h2 class="md-display-3">{{country}}</h2>
    <p class="md-display-1 infected">
      {{globalInfected}}% OF TOTAL INFECTED
    </p>
    <p class="md-display-1 recovered md-recovered">
      {{globalRecovered}}% OF TOTAL RECOVERED
    </p>
    <p class="md-display-1 deaths">
      {{globalDeaths}}% OF TOTAL DEATHS
    </p>
  </div>
</template>

<script>
export default {
  name: "CoronaTotal",
  props: ["country", "totalDeaths", "totalRecovered", "totalInfected", "data"],
  computed: {
    globalDeaths() {
      return ((this.data.deaths.value / this.totalDeaths) * 100).toFixed(2);
    },
    globalRecovered() {
      return ((this.data.recovered.value / this.totalRecovered) * 100).toFixed(
        2
      );
    },
    globalInfected() {
      return ((this.data.confirmed.value / this.totalInfected) * 100).toFixed(
        2
      );
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  text-transform: uppercase;
  color: #fff;
}
.md-progress-bar {
  height: 1.2rem;
  width: 80%;
  margin: 0 auto;
}

@media(max-width: 776px){
  .md-display-1{
    font-size: 1rem;
  }
  h2{
    font-size: 2rem;
    padding-top: 1rem;
  }
}
</style>