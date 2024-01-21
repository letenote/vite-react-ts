export interface PageTrainingReducerInterface {
  listLoading: boolean;
  list: Array<PageTrainingListReducerInterface>;
  totalPage: number;
  detail: {
    loading: boolean;
    data: TrainingDetailReducerInterface;
  };
}

export interface PageTrainingListReducerInterface {
  id: string;
  name: string;
  createdAt: string;
  startDate: string;
  endDate: string;
  createdBy: {
    id: string;
    name: string;
    departement: {
      id: string;
      name: string;
    };
  };
  trainingType: {
    id: string;
    name: string;
  };
  participants: Array<{ id: string; label: string }>;
  payments: Array<{
    cost: string;
    id: string;
    invoice: string;
    isPaid: boolean;
  }>;
}

export interface TrainingDetailReducerInterface {
  id: string;
  name: string;
  createdAt: string;
  startDate: string;
  endDate: string;
  objective: string;
  duration: string;
  createdBy: {
    id: string;
    name: string;
    departement: {
      id: string;
      name: string;
    };
  };
  budget: {
    name: string;
    id: string;
    code: string;
    cost: string;
    requestBy: {
      id: string;
      name: string;
      createdAt: string;
    };
  };
  trainingType: {
    id: string;
    name: string;
  };
  participants: Array<{
    id: string;
    name: string;
    departement: { name: string };
  }>;
  payments: Array<TrainingDetailPaymentListReducerInterface>;
}

export interface TrainingDetailPaymentListReducerInterface {
  cost: string;
  id: string;
  invoice: string;
  isPaid: boolean;
  vendor: {
    id: string;
    name: string;
    vendorType: {
      name: string;
    };
  };
}
