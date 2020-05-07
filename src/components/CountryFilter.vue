<template>
  <div class="container">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-small-size-100">
        <md-autocomplete
          class="input"
          :md-open-on-focus="true"
          v-model="selectedCountry"
          :md-options="countries"
          @md-selected="mdSelected"
          @input="reset"
          md-dense
        >
          <label>Country</label>
        </md-autocomplete>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchCountries } from "../services/coronaService";

export default {
  name: "CountryFilter",
  data: () => ({
    selectedCountry: null,
    countries: []
  }),
  async created() {
    this.countries = await fetchCountries();
  },
  methods: {
    mdSelected(val) {
      this.$emit("change", val);
    },
    reset(val) {
      if (val === "") {
        this.$emit("change", null);
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input {
  margin-top: 2em;
  padding-top: 1em;
  border-radius: 2%;
  width: 480px;
}
@media (max-width: 776px) {
  .input {
    width: 400px;
  }
}
</style>