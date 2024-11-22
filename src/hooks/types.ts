import { FieldValues, UseFormRegister } from 'react-hook-form';

export type FieldType = 'input' | 'textarea' | 'checkbox';

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  props: {
    [key: string]: any;
  };
}

export interface FormConfig {
  fields: FormField[];
  submitLabel: string;
}

export interface FormComponentProps {
  onSubmit: (data: any) => void;
  config: FormConfig;
  register: UseFormRegister<FieldValues>;
  generateErrorMessages: () => string;
}
