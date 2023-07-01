<template>
  <div class="hello">
    <Juego v-if="habilitado"
      :nombresP="nombres"
      :imagenesP="imagenes"
      :nIntento="numIntento"
      :nPuntaje="numPuntaje"
    />
    <br />
    <br />
    <button
      v-if="habilitado"
      v-on:click="
        obtenerPokemonsArray()"
    >
      Jugar
    </button>

    <br />
    <div>
      
      <h1>{{ mensaje }}</h1>
      <br />
      <button v-if="mensaje" v-on:click="reiniciar">Nuevo Juego</button>
    </div>
  </div>
</template>

<script>
import Juego from "@/components/Juego.vue";
import getPokemons from "@/helpers/metodos";

export default {
  components: {
    Juego,
  },
  data() {
    return {
      mensaje:"",
      numPuntaje: 0,
      numIntento: 5,
      pokemonAr: [],
      nombres: ["xxxxxxxx", "xxxxxxxx", "xxxxxxxx"],
      imagenes: [
        "https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png",
        "https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png",
        "https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png",
      ],
      habilitado: true,
      win:false
    };
  },
  methods: {
    async obtenerPokemonsArray() {
      this.pokemonAr = await getPokemons();
      console.log("pokemon desde el page");
      console.log(this.pokemonAr);
      this.mostrarNombres()
      this.mostrarImagenes()
      this.aumentarPuntaje()
       this.disminuirIntentos()
    },
    mostrarNombres() {
      this.nombres[0] = this.pokemonAr[0].nombre;
      this.nombres[1] = this.pokemonAr[1].nombre;
      this.nombres[2] = this.pokemonAr[2].nombre;
      return this.nombres;
    },
    mostrarImagenes() {
      this.imagenes[0] = this.pokemonAr[0].imagen;
      this.imagenes[1] = this.pokemonAr[1].imagen;
      this.imagenes[2] = this.pokemonAr[2].imagen;
      return this.imagenes;
    },
    disminuirIntentos() {
      if (this.numIntento > 0) {
        console.log(this.numPuntaje)
        return this.numIntento--;
      } else if (this.numPuntaje < 10 && this.numIntento == 0) {
        this.habilitado = false;
        return (this.mensaje = "Haz utilizado tus 5 intentos. El juego ha terminado, intentalo nuevamente");
      }else if (this.numPuntaje >= 10 && this.numIntento >= 0) {
          this.win=true;
          this.habilitado = false;
          return (this.mensaje =
            "Puntaje = " + this.numPuntaje + ". Felicitaciones has ganado un premio de $10.000,00");
           
        }
    },
    aumentarPuntaje() {
      if (this.pokemonAr[0].id == this.pokemonAr[1].id &&
        this.pokemonAr[0].id == this.pokemonAr[2].id ) {
        return (this.numPuntaje += 5);
      } else if (
        this.pokemonAr[0].id == this.pokemonAr[1].id ||
        this.pokemonAr[0].id == this.pokemonAr[2].id ||
        this.pokemonAr[1].id == this.pokemonAr[2].id
      ) {
        return (this.numPuntaje += 2);
      } else {
        return (this.numPuntaje += 0);
      }
    },
    reiniciar() {
      (this.nombres = ["xxxxxxxx", "xxxxxxxx", "xxxxxxxx"]),
        (this.imagenes = [
          "https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png",
          "https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png",
          "https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png",
        ]);
      this.numPuntaje = 0;
      this.numIntento = 5;
      this.mensaje = "";
      this.habilitado = true;
      this.win = false;
    },
  },
};
</script>

<style scoped>

img{
  width: 500px;
  height: 300px;
}


</style>
