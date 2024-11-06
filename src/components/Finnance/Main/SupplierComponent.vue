<template>
    <div>
        <p style="font-weight:bold"> Supplier {{type}} </p>
     <table class="table table-primary  table-responsive table-striped    mt-5">
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td><img :src="require('@/assets/Logo/Hand Made (2).png')" alt="" height="100px" width="100px"></td>
            <td>
                <p>Id : {{ product.id }}</p>
                <p>Name : {{ product.name }}</p>
                <p>Stock : {{ product.stock }}</p>
            </td>
            <td>
                <p>WeeklyWallet {{ product.weeklyWallet }}</p>
                <p>ProductsShipped {{ product.productsShipped }}</p>
                <p>ProductsReturned {{ product.productsShipped }}</p>
            </td>
            <td>
                <p>LifeTimeWallet {{ product.lifetimeWallet }}</p>
                <p>ProductsShipped {{ product.productsShipped }}</p>
                <p>ProductsReturned {{ product.productsShipped }}</p>
            </td>
          </tr>
        </tbody>
     </table>
     </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Product',
            stock: 100,
            weeklyWallet: 500,
            productsShipped: 50,
            productsReturned: 5,
            lifetimeWallet: 2000,
          },
          {
            id: 1,
            name: 'Product',
            stock: 100,
            weeklyWallet: 500,
            productsShipped: 50,
            productsReturned: 5,
            lifetimeWallet: 2000,
          },
          {
            id: 1,
            name: 'Product',
            stock: 100,
            weeklyWallet: 500,
            productsShipped: 50,
            productsReturned: 5,
            lifetimeWallet: 2000,
          },
          
        ],
      };
    },
  };
  </script>