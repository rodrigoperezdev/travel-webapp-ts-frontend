import { ChangeEvent, useState } from "react";

//This hook has to receive a initial form as an object with the name of the values and its values (It may be '')
//The way of calling this hook may look something like this:   const { formState, onInputChange, value1, value2 } = useForm({ value1: "", value2: "" });

type FormValues = {
  [key: string]: string | number;
};

export const useForm = <T extends FormValues>(initialForm: T) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
