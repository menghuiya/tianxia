<template>
  <div class="home">
    <div class="logo">
      <login-area></login-area>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import loginArea from '../components/login/login';

export default {
  components: {
    loginArea,
  },
};
</script>
