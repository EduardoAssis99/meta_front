<template>
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="fs-1">Produtos</div>
        <div><router-link class="btn btn-primary" to="/product/new">Novo Produto</router-link></div>
      </div>

      <div class="mt-4">
        <form class="form-control">
          <p class="fs-1">Filtro</p>

          <div class="row">
            <div class="mb-3 col-sm-4">
              <label for="productName" class="form-label">Produto</label>
              <input type="email" class="form-control" v-model="search.title" id="productName" aria-describedby="emailHelp">
            </div>
          </div>

          <button @click="filtro" type="button" class="btn btn-primary">Pesquisar</button>
        </form>

      </div>

      <div class="mt-4">
        <table class="table table-striped" id="datatableProduct">
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{item.id}}</td>
              <td>{{item.title}}</td>
              <td>{{item.categories.title}}</td>
              <td>
                <button @click="viewProduct(item.id)" type="button" class="btn btn-secondary">Visualizar</button>
                <button @click="editProduct(item.id)" type="button" class="btn btn-success m-1">Editar</button>
                <button @click="deleteProduct(item.id)" type="button" class="btn btn-danger m-1">Deletar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
</template>

<script>
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import $ from 'jquery'
import axios from 'axios'

import Swal from 'sweetalert2'

export default {
    name: 'Products',
    data () {
        return {
            products: [],
            search: {
              title: '',
            },
        };
    },
    mounted() {
      axios.get("products").then((resource) => {
        this.products = resource.data;
        this.setDatatable();
      });
    },
    methods: {
      editProduct(id) {
        this.$router.push('/product' + '/' + id)
      },
      deleteProduct(id) {
        axios.delete("product" + "/" + id)
          .then(response => {
            this.products = response.data.data;
            this.$router.push({path: '/'});
          })
          .catch(() => {
            Swal.fire({
                title:  'Erro',
                text:   'Erro ao deletar registro, verifique e tente novamente!',
                icon:   'error',
            });
          });
      },
      viewProduct(id) {
        this.$router.push('/product' + '/show/' + id)
      },
      filtro(){
        axios.post("productsFilter", this.search)
          .then((response) => {
            this.products = response.data;
          })
      },
      setDatatable(){
        setTimeout(function(){ $('#datatableProduct').DataTable({
          "language": {
              "sProcessing":    "Procesando...",
              "sLengthMenu":    "Exibir _MENU_ registros por página",
              "sZeroRecords":   "Nenhum resultado encontrado",
              "sEmptyTable":    "Nenhum resultado encontrado",
              "sInfo":          "Exibindo do _START_ até _END_ de um total de _TOTAL_ registros",
              "sInfoEmpty":     "Exibindo do 0 até 0 de um total de 0 registros",
              "sInfoFiltered":  "(Filtrado de um total de _MAX_ registros)",
              "sInfoPostFix":   "",
              "sSearch":        "Buscar:",
              "sUrl":           "",
              "sInfoThousands":  ",",
              "sLoadingRecords": "Cargando...",
              "oPaginate": {
                  "sFirst":    "Primero",
                  "sLast":    "Último",
                  "sNext":    "Próximo",
                  "sPrevious": "Anterior"
              },
              "oAria": {
                  "sSortAscending":  ": Ativar para ordenar a columna de maneira ascendente",
                  "sSortDescending": ": Ativar para ordenar a columna de maneira descendente"
              }
          }
        }); }, 1000);
      }
    }
}
</script>
