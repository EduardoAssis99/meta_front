<template>
    <div class="container">
        <div class="d-flex justify-content-between">
            <div class="fs-1">Editar Categoria</div>
        </div>

        <div class="mt-4">
            <form @submit.prevent="save" class="form-control">
                <div class="mb-2 col-sm-6">
                    <label for="CategoriesInput" class="form-label">Nome da Categoria</label>
                    <input type="text" required class="form-control" id="title" name="title" v-model="resource.title" aria-describedby="CategoriesHelp">
                </div>
                <button type="submit" class="btn btn-primary">Editar</button>
            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'

export default {
    name: 'CategoriesEdit',
    data () {
        return {
            id: null,
            resource: {
                id: '',
                title: '',
            }
        };
    },
    created() {
        this.id = this.$route.params.id;
        axios.get("category" + "/" + this.id)
            .then((response) => {
                this.resource.id = response.data.id,
                this.resource.title = response.data.title
            })
    },
    methods: {

        save() {
            axios.put("category" + "/" + this.id, this.resource)
            .then(() => {
                new Swal({
                    title:  'Sucesso',
                    text:   'Registro Atualizado com Sucesso',
                    icon:   'success',
                }).then(() => {
                    this.$router.push({path: '/categories'});
                });
            })
            .catch(() => {
                new Swal({
                    title:  'Erro',
                    text:   'Erro ao editar registro, verifique e tente novamente!',
                    icon:   'error',
                });
            })
        }

    }
}
</script>
