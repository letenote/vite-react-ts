import { ComponentFormType } from '../../../../components/Forms/enum/ComponentFormType.enum';
import { CreateBudgetFormsType } from '../type/CreateBudgetFormsType.type';

export const CreateBudgetFormsSchema: CreateBudgetFormsType = {
  budgetData: {
    name: {
      id: 'name',
      name: 'name',
      fullWidth: true,
      label: 'Name',
      placeholder: 'Name',
      required: true,
      errorMessage: 'name required',
      value: '',
      disabled: false,
      type: 'text',
      componentType: ComponentFormType.INPUT_TEXT,
      autoFocus: true,
      autoComplete: '',
      validate: {
        pattern: {
          value: /^/,
          message: '',
        },
      },
      options: [],
    },
  },
  detailInformation: {
    cost: {
      id: 'cost',
      name: 'cost',
      fullWidth: true,
      label: 'Cost',
      placeholder: 'Cost',
      required: true,
      errorMessage: 'cost required',
      value: '',
      disabled: false,
      type: 'number',
      componentType: ComponentFormType.INPUT_NUMBER_FORMAT,
      autoFocus: false,
      autoComplete: '',
      validate: {
        pattern: {
          value: /^/,
          message: '',
        },
      },
      options: [],
    },
    information: {
      id: 'information',
      name: 'information',
      fullWidth: true,
      label: 'Information',
      placeholder: 'Information detail',
      required: true,
      errorMessage: 'information required',
      value: '',
      disabled: false,
      type: 'text',
      componentType: ComponentFormType.INPUT_TEXT_AREA,
      autoFocus: false,
      autoComplete: '',
      validate: {
        pattern: {
          value: /^/,
          message: '',
        },
      },
      options: [],
    },
  },
};
