
<template>
    <form @submit.prevent="submit" :validation-schema="Schema" class="form">
      <OurDepartment/>
    </form>

</template>


<script lang="ts" setup>
import { Schema } from 'yup';
import { useData } from './composables/useData';
import OurDepartment from './components/OurDepartment.vue';


const { submit } = useData();

</script>

<style scoped>
.form {
    width: 500px;
    background-color: var(--bg-color);
    box-shadow: var(--box-shadow);
    padding: 1em;
}
</style>