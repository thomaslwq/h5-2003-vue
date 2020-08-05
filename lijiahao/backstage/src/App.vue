<template>
  <div id="app">
      <router-view/>
  </div>
</template>
<script>
    export default {
        name: '',
        components:{

        }
    };
</script>
<style>
    body,
    html,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    li,
    input,
    dl,
    dt,
    dd,
    div{
        margin: 0;
        padding: 0;
    }
    input{
        border: none;
        outline: none;
    }
    li {
        list-style: none;
    }

    b,
    strong {
        font-weight: normal;
    }

    i,
    em {
        font-style: normal;
    }

    a {
        text-decoration: none;
        color:#e5e5e5
    }

    .clearfix {
        *zoom: 1;
    }

    .clearfix:after {
        content: ' ';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

</style>
