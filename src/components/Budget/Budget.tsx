import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { Input, useBudget } from "../../shared";

const budgetSchema = yup.object().shape({
  title: yup.string().required("A title is required"),
  amount: yup.string().required("The amount is also required"),
  gain: yup.bool().required(),
});

export function Budget() {
  const [editing, setEditing] = useState<boolean>(false);
  const { dispatch } = useBudget();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      title: "",
      amount: "",
      gain: false,
    },
    onSubmit: (values) => console.log(values),
    validationSchema: budgetSchema,
  });

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <Input name="title" label="Title" onChange={handleChange} type="text" errors={errors} />
        <Input name="amount" label="Amount" onChange={handleChange} type="text" errors={errors} />
        <label htmlFor="gain" className="flex my-4 text-center">
          Gain
          <input id="gain" type="checkbox" name="gain" onChange={handleChange} className="invisible opacity-0" />
          <div
            className={`flex items-center mx-2 ${
              values.gain ? "bg-green-600 justify-start" : "bg-red-600 justify-end"
            } w-16 h-6 rounded-xl transition-colors`}
          >
            <div className="w-5 h-5 m-1 bg-white rounded-full"></div>
          </div>
          Expense
        </label>
      </form>
      <div className="flex">
        <button
          className={`w-48 p-4 m-2 border-2 ${values.gain ? "border-green-600" : "border-red-600"}`}
          type="submit"
        >
          Add as {values.gain ? "a gain" : "an expense"}
        </button>
      </div>
    </div>
  );
}
