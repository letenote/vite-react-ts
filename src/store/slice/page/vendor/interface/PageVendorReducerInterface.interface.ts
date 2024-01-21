export interface PageVendorReducerInterface {
  listLoading: boolean;
  list: Array<PageVendorListReducerInterface>;
  totalPage: number;
}

export interface PageVendorListReducerInterface {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  isActive: boolean;
  createdAt: string;
  createdBy: {
    name: string;
    id: string;
  };
  vendorType: {
    name: string;
    id: string;
  };
}
