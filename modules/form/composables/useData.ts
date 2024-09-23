import { ref } from "vue";
import "@/modules/config/yup";
import * as yup from "yup";
import { useForm, useIsFormValid } from "vee-validate";

import useApi from "../../api/useApi";



const createdTodoData = ref<any>(null);

const { createTodo } = useApi();

export const useData = () => {
  const schema = yup.object().shape({
    departmentName: yup.string().required().min(2),
    departmentHead: yup.string().required().min(3),
    departmentDescription: yup.string().required(),
    employeesName: yup.string().required().min(2),
    employeesLastName: yup.string().required().min(2),
    employeesDepartment: yup.string().required().min(2),
    employeesExtension: yup.number().required().min(3),
  });

  const { handleSubmit, defineField, errors, meta, resetForm } = useForm({
    validationSchema: schema,
  });

  const [departmentName, departmentNameAttrs] = defineField("departmentName");
  const [departmentHead, departmentHeadAttrs] = defineField("departmentHead");
  const [departmentDescription, departmentDescriptionAttrs] = defineField(
    "departmentDescription"
  );

  const [employeesName, employeesNameAttrs] = defineField("employeesName");
  const [employeesLastName, employeesLastNameAttrs] =
    defineField("employeesLastName");
  const [employeesDepartment, employeesDepartmentAttrs] = defineField(
    "employeesDepartment"
  );
  const [employeesExtension, employeesExtensionAttrs] =
    defineField("employeesExtension");

  const isValid = useIsFormValid();

  const submit = handleSubmit(async (values) => {
    const todo = {
      departmentName: values.departmentName,
      departmentHead: values.departmentHead,
      departmentDescription: values.departmentDescription,
      employeesName: values.employeesName,
      employeesLastName: values.employeesLastName,
      employeesDepartment: values.employeesDepartment,
      employeesExtension: values.employeesExtension,
      isComplete: false,
    };

    try {
      const createdTodo = await createTodo(todo);
      console.log("Todo created:", createdTodo);

      createdTodoData.value = createdTodo;

    

      resetForm({
        values: {},
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  });

  return {
    meta,
    departmentName,
    departmentNameAttrs,
    departmentHead,
    departmentHeadAttrs,
    departmentDescription,
    departmentDescriptionAttrs,
    employeesName,
    employeesNameAttrs,
    employeesLastName,
    employeesLastNameAttrs,
    employeesDepartment,
    employeesDepartmentAttrs,
    employeesExtension,
    employeesExtensionAttrs,
    isValid,
    errors,
    submit,

    createdTodoData,
  };
};
