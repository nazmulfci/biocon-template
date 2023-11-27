<script setup>

import { RouterLink, RouterView } from 'vue-router';
import Headerpage from './components/Headerpage.vue';
import Footerpage from './components/Footerpage.vue';

</script>

<template>

  <Headerpage/>
  <RouterView />
   <Footerpage/>

</template>
