<template>
  <Home />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Home from './screens/Home.vue';

@Component({
  components: {
    Home,
  },
})
export default class App extends Vue {}
</script>

<style scoped></style>
