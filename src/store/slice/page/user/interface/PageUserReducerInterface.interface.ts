export interface PageUserReducerInterface {
  listLoading: boolean;
  list: Array<PageUserListReducerInterface>;
  totalPage: number;
}

export interface PageUserListReducerInterface {
  id: string;
  name: string;
  nik: string;
  email: string;
  gender: string;
  isActive: boolean;
  role: {
    name: string;
    id: string;
  };
  departement: {
    name: string;
    id: string;
  };
  level: {
    name: string;
    id: string;
  };
  position: {
    name: string;
    id: string;
  };
  division: {
    name: string;
    id: string;
  };
}
