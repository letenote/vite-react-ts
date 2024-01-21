export interface PageMonitoringReducerInterface {
  employee: {
    total: string;
  };
  gender: {
    loading: boolean;
    label: string;
    data: PageMonitoringGenderDataReducerInterface;
  };
  spend: PageMonitoringBasicDataReducerInterface;
  employeeTrained: PageMonitoringBasicDataReducerInterface;
  trainingHours: PageMonitoringBasicDataReducerInterface;
  totalTrainingPerMonth: PageMonitoringTotalTrainingPerMonthDataReducerInterface;
}

export interface PageMonitoringTotalTrainingPerMonthDataReducerInterface {
  loading: boolean;
  label: string;
  value: Array<number>;
}

export interface PageMonitoringBasicDataReducerInterface {
  loading: boolean;
  label: string;
  value: string;
  suffix: string;
  prefix: string;
}

export interface PageMonitoringGenderDataReducerInterface {
  male: {
    id: number;
    label: string;
    value: number;
    color: string;
  };
  female: {
    id: number;
    label: string;
    value: number;
    color: string;
  };
}

// export interface PagePaymentListReducerInterface {
//   id: string;
//   cost: string;
//   invoice: string;
//   notes: string;
//   isPaid: boolean;
//   createdAt: string;
//   date: string;
//   training: {
//     name: string;
//     id: string;
//     objective: string;
//     duration: string;
//     startDate: string;
//     endDate: string;
//     participants: Array<{
//       id: string;
//       name: string;
//     }>;
//     trainingType: {
//       id: string;
//       name: string;
//     };
//     createdBy: {
//       id: string;
//       name: string;
//       departement: {
//         id: string;
//         name: string;
//       };
//     };
//   };
//   budget: {
//     name: string;
//     id: string;
//     requestBy: {
//       id: string;
//       name: string;
//       departement: {
//         id: string;
//         name: string;
//       };
//     };
//   };
//   vendor: {
//     id: string;
//     name: string;
//     vendorType: {
//       id: string;
//       name: string;
//     };
//   };
// }
