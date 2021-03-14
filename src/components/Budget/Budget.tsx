import { useFormik } from "formik";
import * as yup from "yup";

import "./Budget.css";

const budgetSchema = yup.object().shape({
  budget: yup.number().required("Please set a budget first!"),
});

export function Budget() {
  const formik = useFormik({
    initialValues: {
      budget: 0,
    },
    onSubmit: (values) => console.log(values),
    validationSchema: budgetSchema,
  });

  return (
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
  );
}
