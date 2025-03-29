import apiClient from "../config/api-client"
import { Expense } from "../model/expense"

export const getExpenses = () => {
  return  apiClient.get<Expense[]>('/expenses');
}