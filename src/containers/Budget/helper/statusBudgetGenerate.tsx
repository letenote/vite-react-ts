import { RoleType } from "../../../constant/Permission.enum";
import { PageBudgetListReducerInterface } from "../../../store/slice/page/budget/interface/PageBudgetReducerInterface.interface";
import { BudgetStatus } from "../enum/BudgetStatus.enum";
import { BudgetStatusTypes } from "../type/BudgetStatusTypes.type";

export const statusBudgetGenerate = (
  data: PageBudgetListReducerInterface,
  role: string
): BudgetStatusTypes => {
  if (data.isDraft) return BudgetStatus.DRAFT;
  if (data.reviewBy === null)
    return role === RoleType.HRO
      ? BudgetStatus.NEED_REVIEW
      : BudgetStatus.IN_PROGRESS;
  if (data.rejectedByCfo !== null || data.rejectedByChrmo !== null)
    return BudgetStatus.REJECT;
  if (data.approvedByCfo !== null || data.approvedByChrmo !== null)
    return BudgetStatus.APPROVE;
  if (data.approvedByCfo === null || data.approvedByChrmo === null)
    return role === RoleType.CHRMO || role === RoleType.CFO
      ? BudgetStatus.NEED_APPROVE
      : BudgetStatus.IN_PROGRESS;

  return BudgetStatus.UNKNOWN;
};

export const statusColorBudgetGenerate = (
  status: BudgetStatusTypes
): "secondary" | "info" | "success" | "warning" | "error" => {
  switch (status) {
    case BudgetStatus.DRAFT:
      return "secondary";
    case BudgetStatus.IN_PROGRESS:
      return "info";
    case BudgetStatus.APPROVE:
      return "success";
    case BudgetStatus.NEED_REVIEW:
    case BudgetStatus.NEED_APPROVE:
      return "warning";
    default:
      return "error";
  }
};

export const getIsDraftByStatus = (status: BudgetStatusTypes): boolean => {
  switch (status) {
    case BudgetStatus.DRAFT:
      return true;
    default:
      return false;
  }
};
