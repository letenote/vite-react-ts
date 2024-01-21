import { BudgetStatus } from '../enum/BudgetStatus.enum';

export type BudgetStatusTypes =
  | BudgetStatus.ALL
  | BudgetStatus.DRAFT
  | BudgetStatus.IN_PROGRESS
  | BudgetStatus.APPROVE
  | BudgetStatus.REJECT
  | BudgetStatus.NEED_REVIEW
  | BudgetStatus.NEED_APPROVE
  | BudgetStatus.UNKNOWN;
