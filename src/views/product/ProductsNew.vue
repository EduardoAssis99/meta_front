<template>
    <div class="container">
        <div class="d-flex justify-content-between">
            <div class="fs-1">Cadastrar Produto</div>
        </div>

        <div class="mt-4">
            <form @submit.prevent="save" class="form-control">
                <div class="mb-2 col-sm-7">
                    <label for="productInput" class="form-label">Nome do produto</label>
                    <input type="text" required class="form-control" id="title" name="title" v-model="resource.title" aria-describedby="productHelp">
                </div>
                <div class="mb-2 col-sm-7">
                    <label for="productInput" class="form-label">Categoria</label>
                    <select class="form-select" required name="category" id="category" v-model="resource.category">
                        <option v-for="item in categories" :key="item" :value="item.id">{{ item.title }}</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'

export default {
    name: 'ProductsNew',
    data () {
        return {
            resource: {
                title: '',
                category: null,
            },
            categories: [],
        };
    },
    methods: {

        save() {
            console.log(this.resource);
            axios.post("product", this.resource)
                .then(() => {
                    new Swal({
                        title:  'Sucesso',
                        text:   'Registrado com Sucesso',
                        icon:   'success',
                    }).then(() => {
                        this.$router.push({path: '/products'}); 
                    });
                })
                .catch(() => {
                    new Swal({
                        title:  'Erro',
                        text:   'Erro ao salvar registro, verifique e tente novamente!',
                        icon:   'error',
                    });
                })
        }

    },
    mounted() {
        axios.get("categories").then((response) => {
            this.categories = response.data;
        })
    }
}
</script>
