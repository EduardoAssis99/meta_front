<template>
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="fs-1">Categorias</div>
        <div><router-link class="btn btn-primary" to="/category/new">Nova Categoria</router-link></div>
      </div>

      <div class="mt-4">
        <table class="table table-striped" id="datatable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Quantidade de Produtos</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categories" :key="item.id">
              <td>{{item.id}}</td>
              <td>{{item.title}}</td>
              <td>{{item.products.length}}</td>
              <td>
                <button @click="viewCategory(item.id)" type="button" class="btn btn-secondary">Visualizar</button>
                <button @click="editCategory(item.id)" type="button" class="btn btn-success m-1">Editar</button>
                <button @click="deleteCategory(item.id)" type="button" class="btn btn-danger m-1">Deletar</button>
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
    name: 'Categories',
    data () {
        return {
            categories: [],
        };
    },
    mounted() {
      axios.get("categories").then((resource) => {
        this.categories = resource.data;
        this.setDatatable();
      });
    },
    methods: {
      editCategory(id) {
        this.$router.push('/category' + '/' + id)
      },
      deleteCategory(id) {
        axios.delete("category" + "/" + id)
          .then(response => {
            this.categories = response.data;
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
      viewCategory(id) {
        this.$router.push('/category' + '/show/' + id)
      },
      setDatatable(){
        setTimeout(function(){ $('#datatable').DataTable({
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
