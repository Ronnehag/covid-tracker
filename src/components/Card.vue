<template>
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
</template>

<script>
export default {
    name: 'Card',
    props: ['title', 'duration', 'delay', 'endVal', 'options', 'lastUpdate']
};
</script>

<style>
</style>