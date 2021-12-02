<template>
    <div class="container">
        <div class="d-flex justify-content-between">
            <div class="fs-1">Cadastrar Categoria</div>
        </div>

        <div class="mt-4">
            <form @submit.prevent="save" class="form-control">
                <div class="mb-2 col-sm-6">
                    <label for="CategoriesInput" class="form-label">Nome da Categoria</label>
                    <input type="text" required class="form-control" id="title" name="title" v-model="resource.title" aria-describedby="CategoriesHelp">
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
    name: 'CategoriesNew',
    data () {
        return {
            resource: {
                title: '',
            }
        };
    },
    methods: {

        save() {
            axios.post("category", this.resource)
            .then(() => {
                new Swal({
                    title:  'Sucesso',
                    text:   'Registrado com Sucesso',
                    icon:   'success',
                }).then(() => {
                    this.$router.push({path: '/categories'});
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

    }
}
</script>
