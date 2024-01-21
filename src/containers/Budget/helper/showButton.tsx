/* eslint-disable prefer-const */
import { PageBudgetListReducerInterface } from '../../../store/slice/page/budget/interface/PageBudgetReducerInterface.interface';

export const showRejectAndApproveButtonController = (
  data: PageBudgetListReducerInterface
): boolean => {
  let temp = [];
  if (data.rejectedByChrmo !== null) {
    temp.push('reject');
  }
  if (data.rejectedByCfo !== null) {
    temp.push('reject');
  }
  if (data.approvedByChrmo !== null) {
    temp.push('approve');
  }
  if (data.approvedByCfo !== null) {
    temp.push('approve');
  }

  return temp.length > 0 ? false : true;
};
