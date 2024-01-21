export type LoginFormType = {
  email: {
    id: string;
    name: string;
    fullWidth: boolean;
    label: string;
    placeholder: string;
    required: boolean;
    errorMessage: string;
    value: string;
    disabled: boolean;
    type: string;
    autoFocus: boolean;
    autoComplete: string;
    validate: {
      pattern: {
        value: RegExp;
        message: string;
      };
    };
  };
  password: {
    id: string;
    name: string;
    fullWidth: boolean;
    label: string;
    placeholder: string;
    required: boolean;
    errorMessage: string;
    value: string;
    disabled: boolean;
    type: string;
    autoFocus: boolean;
    autoComplete: string;
    validate: {
      pattern: {
        value: RegExp;
        message: string;
      };
    };
  };
};
