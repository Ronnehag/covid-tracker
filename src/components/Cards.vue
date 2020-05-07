<template>
  <div class="container" v-if="data">
    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-small-size-100">
        <md-card class="card-item infected">
          <md-card-header>
            <div class="md-title">TOTAL INFECTED</div>
            <div class="md-subhead">
              <ICountUp
                :duration="2.5"
                :delay="options.delay"
                :endVal="this.data.confirmed.value"
                :options="options"
              />
            </div>
          </md-card-header>
         <md-card-content>Last updated - {{this.data.lastUpdate | humanize}}</md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-small-size-100">
        <md-card class="card-item recovered">
          <md-card-header>
            <div class="md-title">TOTAL RECOVERED</div>
            <div class="md-subhead">
              <ICountUp
                :duration="2.5"
                :delay="options.delay"
                :endVal="this.data.recovered.value"
                :options="options"
              />
            </div>
          </md-card-header>
          <md-card-content>Last updated - {{this.data.lastUpdate | humanize}}</md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-small-size-100">
        <md-card class="card-item deaths">
          <md-card-header>
            <div class="md-title">TOTAL DEATHS</div>
            <div class="md-subhead">
              <ICountUp
                :duration="2.5"
                :delay="options.delay"
                :endVal="this.data.deaths.value"
                :options="options"
              />
            </div>
          </md-card-header>
          <md-card-content>Last updated - {{this.data.lastUpdate | humanize}}</md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  name: "Cards",
  props: ["data"],
  components: {
    ICountUp
  },
  data() {
    return {
      options: {
        delay: 500,
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 80%;
}
.card-item {
  background: #303030;
}
.md-subhead {
  font-size: 1.2em !important;
  padding-top: 3%;
}
.recovered {
  border-bottom: 10px solid rgba(0, 255, 0, 0.5);
}
.infected {
  border-bottom: 10px solid rgba(187, 134, 252, 0.5);
}
.deaths {
  border-bottom: 10px solid rgba(255, 0, 0, 0.5);
}
@media (max-width: 776px) {
  .container {
    width: 100%;
  }
  .card-item {
    margin-top: 2%;
  }
}
</style>