import { useEffect, useState } from "react";
import { getExpenses } from "../services/expense-service";
import { Expense } from "../model/expense";

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setErrors] = useState(null);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    // make api call to the backend system
    setLoader(true);
    getExpenses()
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
  }, []);
  return { expenses, error, isLoading };
};

export default useExpenses;
