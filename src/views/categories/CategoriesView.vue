<template>
    <div class="container">
        <div class="d-flex justify-content-between">
            <div class="fs-1">Visualizar Categoria</div>
        </div>

        <div class="mt-4">
            <form @submit.prevent="save" class="form-control">
                <div class="mb-2 col-sm-6">
                    <label for="CategoriesInput" class="form-label">Categoria</label>
                    <input type="text" disabled class="form-control" id="title" name="title" v-model="resource.title" aria-describedby="CategoriesHelp">
                </div>
            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CategoriesView',
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
}
</script>
