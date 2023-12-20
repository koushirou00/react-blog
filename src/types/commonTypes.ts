// /src/types/commonTypes.ts
import { FieldError } from 'react-hook-form';

export type ButtonProps = {
  text: string;
  type: "submit" | "reset" | "button";
  className?: string;
  onClick?: () => void;
}

export type InputProps = {
  id: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: FieldError;
  className: string;
};

export type TextareaProps = {
  id: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: FieldError;
  className: string;
};


export type LabelProps = {
  htmlFor: string;
  className?: string;
  text: string;
}