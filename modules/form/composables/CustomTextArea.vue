<template>
    <div>

        <FloatLabel>
            <Textarea 
            :type="type"
            :value="modelValue"
             @input="$emit('update:modelValue' , ($event.target as HTMLTextAreaElement)?.value.trim() ?? '')"
            rows="5" cols="30"
            @blur="$emit('blur')"
            label="Beschreibung"
            :class="['formTextArea', {'backGroundError' : error }]"  />
            <label class="formTextAreaLabel">{{ label }}</label>
        </FloatLabel>

        <span v-if="error">{{ error }}</span>
    </div>
</template>

<script lang="ts" setup>

import Textarea from 'primevue/textarea';

interface Props {

    modelValue?: string | number;
    error?: string;
    type?: 'text' | 'number';
    label?: string;
}

withDefaults(defineProps<Props>() , {
 type: 'text',
})


defineEmits(['update:modelValue', 'blur'])

</script>


<style scoped>
.formTextArea {
    width: 100%;
    height: 100px;
    border: none;
    padding: 1em;
    margin-bottom: 20px;
    outline: none;
    text-align: center;
    resize: none;
    background-color:var(--primary-color);
    color: black;
}

.formTextAreaLabel {
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
}
</style>