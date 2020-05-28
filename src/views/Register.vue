<template>
  <div class="home">
    <div class="logo">
      <register-area></register-area>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import registerArea from '../components/register/register';

export default {
  components: {
    registerArea,
  },
};
</script>
