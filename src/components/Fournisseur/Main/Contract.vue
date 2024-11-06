<template>
    <div class="text-center mt-5 py-5">
      <div class="mb-5">
        <p >Contract</p>
      </div>
      <v-btn @click="downloadAsPDF()">Download Contract</v-btn>
    </div>
  </template>
  <script>
 import { jsPDF } from "jspdf";
  export default {
    methods: {
        downloadAsPDF(){
            const doc = new jsPDF();
            doc.text("Contract !", 10, 10);
            doc.save("Contract.pdf");
        }
    },
  };
  </script>