<template>
    <h3 
    class="formInput__title">Abteilung</h3>
    <div>  
       
        <CustomInput
       v-model="departmentName"
       v-bind="departmentNameAttrs"
       :error="errors.departmentName"
       label="Abteilungsname"
       />

      
        <CustomInput
       class="spaceButton"
       v-model="departmentHead"
       v-bind="departmentHeadAttrs"
       :error="errors.departmentHead"
       label="Abteilungsleiter"
       />

     
        <CustomTextArea
        v-model="departmentDescription"
        v-bind="departmentDescriptionAttrs"
        :error="errors.departmentDescription"
         label="Beschreibung"
        />

    </div>

    <h3 
    class="formInput__title">Mitarbeiter</h3>

    <div>
        
        <CustomInput
       v-model="employeesName"
       v-bind="employeesNameAttrs"
       :error="errors.employeesName"
       label="Vorname"
       />

       
        <CustomInput
       v-model="employeesLastName"
       v-bind="employeesLastNameAttrs"
       :error="errors.employeesLastName"
       label="Nachname"
       />


        <CustomInput
       v-model="employeesDepartment"
       v-bind="employeesDepartmentAttrs"
       :error="errors.employeesDepartment"
       label="Abteilung"
       />

     
       
        <CustomInput
       v-model="employeesExtension"
       v-bind="employeesExtensionAttrs"
       :error="errors.employeesExtension"
       label="Durchwahl"
       />


        <button
        @click="submit"
        class="formButton"
        type="submit" 
        :disabled="!isValid"
        >
            Senden
        </button>
    </div>
</template>

<script lang="ts" setup>
import CustomInput from '../composables/CustomInput.vue';
import CustomTextArea from '../composables/CustomTextArea.vue';
import { useData } from '../composables/useData';

const { departmentName,
    departmentNameAttrs,
    departmentHead,
    departmentHeadAttrs,
    departmentDescription,
    departmentDescriptionAttrs,
    employeesName, 
    employeesLastName,
    employeesLastNameAttrs,
    employeesNameAttrs,
    employeesDepartment,
    employeesDepartmentAttrs,
    employeesExtension,
    employeesExtensionAttrs,


    isValid,
    errors,


    submit

         } = useData();


</script>

<style scoped>
.formInput {
    width: 100%;
    padding: .6em 1em;
    border: none;
    outline: none;
    margin-bottom: 10px;
}

.spaceButton {
    margin-bottom: 40px;
}

.formInput__title {
    text-align: center;
    margin-bottom: 20px;
}

.formButton {
    position: relative;
    border: none;
    padding: 0.6em 2em;
    border-radius: .4em;
    margin-top: 10px;
    color: var(--text-color);
    box-shadow: var(--box-shadow);
    background-color: var(--primary-color);
}

.formButton:disabled {
    background-color: var(--primary-color);
    color: var(--bg-color);
    box-shadow: none;
    box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.63);
    /* Sombra dentro */
}

</style>
