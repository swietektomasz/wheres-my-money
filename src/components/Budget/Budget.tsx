import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const budgetSchema = yup.object().shape({
  budget: yup.number().required("Please set a budget first!"),
});

export function Budget() {
  const [budget, setBudget] = useState<number>(0);
  const [editing, setEditing] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      budget: 0,
    },
    onSubmit: (values) => {
      setBudget(values.budget);
      setEditing(false);
    },
    validationSchema: budgetSchema,
  });

  return (
    <div className="flex flex-row justify-center">
      {editing ? (
        <form onSubmit={formik.handleSubmit} className="budget-form">
          <label className="budget-form__label" htmlFor="budget">
            Budget amount
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
            Set budget
          </button>
        </form>
      ) : (
        <div className="flex flex-row w-full">
          <meter className="w-4/5 m-4" max={budget} value="55.93" title="Remaining budget"></meter>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}
