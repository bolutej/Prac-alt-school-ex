<template>
    <main>
    <p>gggg</p>
    <div v-for="product in products" v-bind:key="product.id">
        {{ product.title }}
        {{ product.description }}
        {{ product.price }}
    </div>
    </main>
</template>
<script>
// import axios from 'axios'
export default {
    data() {
        return {
            products: []
        }
    },
    methods: {
       async fetchProducts() {
            await fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => this.products = data)
                .catch(err => console.log(err.message))
        }
    },
    mounted() {
        this.fetchProducts();
    }
    
}
</script>