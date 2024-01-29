<template>
  <section class="wrapper">
    <div class="flex align-items-center justify-content-between">
      <h1>Products</h1>
      {{ productService.limit }} of {{ productService.total }}
    </div>
    <ul class="product-list">
      <li v-for="product in productService.products" :key="product.id">
        <article class="grid product-container card">
          <div class="image">
            <img :src="product.images[0]" alt="" loading="lazy" />
          </div>
          <div class="product-container__content">
            <h2>
              {{ product.title }}
            </h2>
            <p>
              <span class="grey-text">Description: </span>
              <strong>{{ product.description }}</strong>
            </p>
            <p>
              <span class="grey-text">Brand: </span>
              {{ product.brand }}
            </p>
            <p>
              <span class="grey-text">Category: </span>{{ product.category }}
            </p>
          </div>
          <div class="flex product-container__aside">
            <div class="text-align-end aside__price">
              <StaticPrice :quantity="product.price" coin="EUR" />
            </div>
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { productService } from "../services/products";
import { ProductService } from "../types";

export default defineComponent({
  data() {
    return {
      productService: {} as ProductService,
    };
  },
  async created() {
    this.productService = await productService.get();
  },
});
</script>

<style lang="css" scoped>
.product-list {
  padding: 0;
}
.product-list li {
  margin-bottom: 2em;
}
.product-container {
  align-items: flex-start;
  grid-template-columns: 210px 1fr 100px;
}

.product-container__content {
  padding: 0 1em;
}

.product-container__aside {
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.image {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}

.image img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>
