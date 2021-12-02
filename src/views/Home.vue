<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <div class="fs-1">Categorias e Quantidade de Produtos</div>
    </div>
  </div>

  <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">

    <div v-for="item in categories" :key="item" class="card text-white bg-secondary" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Categoria: {{item.title}}</h5>
        <p class="card-text">Quantidade de Produtos: {{item.products.length}}</p>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      categories: [],
    };
  },
  mounted() {
    axios.get("categories").then((resource) => {
      this.categories = resource.data;
    });
  }
}
</script>
