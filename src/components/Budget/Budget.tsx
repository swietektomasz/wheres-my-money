import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

import { useBudget } from "../../shared";

const budgetSchema = yup.object().shape({
  budget: yup.number().required("Please set a budget first!"),
});

export function Budget() {
  const [editing, setEditing] = useState<boolean>(false);

  const { state, dispatch } = useBudget();

  const formik = useFormik({
    initialValues: {
      budget: 0,
    },
    onSubmit: (values) => {
      if (dispatch) dispatch({ type: "increase-budget", amount: values.budget });
      setEditing(false);
    },
    validationSchema: budgetSchema,
  });

  return (
    <div className="flex flex-row justify-center">
      {editing ? (
        <form onSubmit={formik.handleSubmit} className="budget-form">
          <label className="budget-form__label" htmlFor="budget">
            Increase the budget by:
          </label>

          <input
            className="budget-form__field"
            required
            id="budget"
            name="budget"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.budget}
          />
          <button className="budget-form__button" type="submit">
            Increase
          </button>
        </form>
      ) : (
        <div className="flex justify-center w-full">
          <div className="flex flex-row px-4 py-2 m-2 border-2 rounded-sm">
            <h1 className="mx-4 text-lg font-bold">{state?.budget}</h1>
            <button className="text-lg" onClick={() => setEditing(true)}>
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
