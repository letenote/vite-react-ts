export interface PageBudgetReducerInterface {
  listLoading: boolean;
  list: Array<PageBudgetListReducerInterface>;
  totalPage: number;
}

export interface PageBudgetListReducerInterface {
  id: string;
  name: string;
  code: string;
  cost: string;
  information: string;
  isDraft: boolean;
  createdAt: string;
  reviewAt: string;
  approvedByChrmoAt: string;
  approvedByCfoAt: string;
  rejectedByChrmoAt: string;
  rejectedByCfoAt: string;
  requestBy: {
    name: string;
    id: string;
    departement: {
      name: string;
      id: string;
    };
  };
  reviewBy: {
    name: string;
    id: string;
  };
  approvedByChrmo: {
    name: string;
    id: string;
  };
  approvedByCfo: {
    name: string;
    id: string;
  };
  rejectedByChrmo: {
    name: string;
    id: string;
  };
  rejectedByCfo: {
    name: string;
    id: string;
  };
  training: {
    name: string;
    id: string;
  };
}
