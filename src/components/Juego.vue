<template>
    <div>
      <table class="tabla1">
        <tr>
          <td><h2>Puntaje:</h2></td>
          <td>{{ nPuntaje }}</td>
          <td><h2>Intentos:</h2></td>
          <td>{{ nIntento }}</td>
        </tr>
      </table>
  
      <table>
        <tr>
          <td class="a">
            <img :src="imagenesP[0]" alt="imagen no encontrada" />
          </td>
          <td class="a">
            <img :src="imagenesP[1]" alt="imagen no encontrada" />
          </td>
          <td class="a">
            <img :src="imagenesP[2]" alt="imagen no encontrada" />
          </td>
        </tr>
        <tr>
          <td class="a">{{ nombresP[0] }}</td>
          <td class="a">{{ nombresP[1] }}</td>
          <td class="a">{{ nombresP[2] }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      nIntento: "",
      nPuntaje: "",
      nombresP: [],
      imagenesP: [],
    },
  };
  </script>
  
  <style>
  table,
  tr,
  .a {
    margin: auto;
    padding-right: 20px;
    padding-left: 20px;
    font: 100% sans-serif;
  }
  
  img {
    width: 150px;
    height: 200px;
  }
  
  h2 {
    padding-left: 50px;
  }
  
  button {
    border: solid;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
  </style>