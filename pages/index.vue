<template>
    <div class="mainContainer">
        <MyForm/>
    </div>

</template>

<style scoped>
.mainContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}
</style>


<script setup>
import MyForm from '../modules/form/MyForm.vue'
</script>