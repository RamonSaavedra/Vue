<template>

    <div>
        <FloatLabel>
        <InputText
        :type="type"
        :value="modelValue"
         @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value.trim() ?? '')"
         @blur="$emit('blur')" :class="['formInput', { 'backGroundError': error }]"
         />
         <label class="formInputsLabel">{{ label }}</label>
    </FloatLabel>

     <span v-if="error">{{ error }}</span>
    </div>

 
</template>

<script lang="ts" setup>


import FloatLabel from 'primevue/floatlabel';


interface Props {

    modelValue?: string | number;
    error?: string;
    type?: 'text' | 'number';
    label?: string;
}

withDefaults(defineProps<Props>(), {
    type: 'text',
})


defineEmits(['update:modelValue', 'blur'])

</script>


<style scoped>
.formInput {
    width: 100%;
    padding: .6em 1em;
    border: none;
    outline: none;
   margin-bottom: 10px;
   background-color: var(--primary-color);
   color: var(--text-color);
}

.formInputsLabel {
    font-size: 1.2rem;
}

.backGroundError {
    background-color: rgb(241, 191, 191);
}

span {
    color: var(--errors-color);
    font-size: .8rem;
    text-align: center;
    display: block;
    margin-bottom: 5px;
    color: var(--errors-color);
}

:focus.formInput {
    box-shadow: var(--box-shadow);
    padding: 1em;
}
</style>