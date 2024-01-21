export interface PagePaymentReducerInterface {
  listLoading: boolean;
  list: Array<PagePaymentListReducerInterface>;
  totalPage: number;
  detail: {
    loading: boolean;
    data: PagePaymentListReducerInterface;
  };
}

export interface PagePaymentListReducerInterface {
  id: string;
  cost: string;
  invoice: string;
  notes: string;
  isPaid: boolean;
  createdAt: string;
  date: string;
  training: {
    name: string;
    id: string;
    objective: string;
    duration: string;
    startDate: string;
    endDate: string;
    participants: Array<{
      id: string;
      name: string;
    }>;
    trainingType: {
      id: string;
      name: string;
    };
    createdBy: {
      id: string;
      name: string;
      departement: {
        id: string;
        name: string;
      };
    };
  };
  budget: {
    name: string;
    id: string;
    requestBy: {
      id: string;
      name: string;
      departement: {
        id: string;
        name: string;
      };
    };
  };
  vendor: {
    id: string;
    name: string;
    vendorType: {
      id: string;
      name: string;
    };
  };
}
