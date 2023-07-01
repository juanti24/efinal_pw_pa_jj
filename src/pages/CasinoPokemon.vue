<template>
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
      <title>CASINO POKEMON</title>
      <meta name="description" content="Un casino Pokémon es un lugar donde se puede apostar y ganar recompensas.">
      <meta name="author" content="Kenlly Chacon">
      <meta name="keywords" content="asino, Pokémon, apostar, recompensas, puntaje,juegos de azar">
      <meta name="google-site-verification" content="">
      <meta name="googlebot" content="">
    </head>
  
    <body>
    <header>
      <h1>Casino Pokemón</h1>
    </header>
  
    <nav>
    </nav>
  
    <section>
      <Casino/>
    </section>
  
    </body>
    </html>
  </template>
  
  <script>
  import Casino from "@/components/Casino.vue";
  export default {
    name: "CasinoPokemon",
    components: {
      Casino
    }
  }
  </script>
  
  <style scoped>
  header,nav,section,footer,aside,article{
    display: block;
  }
  
  h1{
    margin: 25px;
    text-align: center;
  }
  
  footer{
    font-size: 18px;
    margin: 25px auto;
    clear: both;
  }
  
  </style>
  