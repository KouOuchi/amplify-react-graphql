/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Tool } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ToolUpdateFormInputValues = {
    D?: number;
    H?: number;
    R?: number;
    Ds?: number;
    L1?: number;
    TipR?: number;
    part_name?: string;
    part_code?: string;
    count?: number;
    life_hour_spec?: number;
    life_hour_current?: number;
    comment?: string;
};
export declare type ToolUpdateFormValidationValues = {
    D?: ValidationFunction<number>;
    H?: ValidationFunction<number>;
    R?: ValidationFunction<number>;
    Ds?: ValidationFunction<number>;
    L1?: ValidationFunction<number>;
    TipR?: ValidationFunction<number>;
    part_name?: ValidationFunction<string>;
    part_code?: ValidationFunction<string>;
    count?: ValidationFunction<number>;
    life_hour_spec?: ValidationFunction<number>;
    life_hour_current?: ValidationFunction<number>;
    comment?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToolUpdateFormOverridesProps = {
    ToolUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    D?: PrimitiveOverrideProps<TextFieldProps>;
    H?: PrimitiveOverrideProps<TextFieldProps>;
    R?: PrimitiveOverrideProps<TextFieldProps>;
    Ds?: PrimitiveOverrideProps<TextFieldProps>;
    L1?: PrimitiveOverrideProps<TextFieldProps>;
    TipR?: PrimitiveOverrideProps<TextFieldProps>;
    part_name?: PrimitiveOverrideProps<TextFieldProps>;
    part_code?: PrimitiveOverrideProps<TextFieldProps>;
    count?: PrimitiveOverrideProps<TextFieldProps>;
    life_hour_spec?: PrimitiveOverrideProps<TextFieldProps>;
    life_hour_current?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ToolUpdateFormProps = React.PropsWithChildren<{
    overrides?: ToolUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tool?: Tool;
    onSubmit?: (fields: ToolUpdateFormInputValues) => ToolUpdateFormInputValues;
    onSuccess?: (fields: ToolUpdateFormInputValues) => void;
    onError?: (fields: ToolUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ToolUpdateFormInputValues) => ToolUpdateFormInputValues;
    onValidate?: ToolUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ToolUpdateForm(props: ToolUpdateFormProps): React.ReactElement;
