import "@/modules/config/yup";
import * as yup from "yup";
import { useForm, useIsFormValid } from "vee-validate";

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

  const { handleSubmit, defineField, errors } = useForm({
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

  const submit = handleSubmit((values) => {
    console.log(values);
  });

  return {
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
  };
};
