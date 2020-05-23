<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <li>
      <a href="mailto:kunalghosh.res@gmail.com">kunalghosh.res@gmail.com</a>
    </li>
  </div>
</template>

<script>
export default {
  name: "FirstComponent",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
