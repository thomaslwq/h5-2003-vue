<template>
  <div class="home">
    <Login></Login>
    <LitterSwiper></LitterSwiper>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/Login"
import LitterSwiper from "../components/LitterSwiper"
export default {
  name: 'Home',
  components: {
   Login,
   LitterSwiper
  }
}
</script>
