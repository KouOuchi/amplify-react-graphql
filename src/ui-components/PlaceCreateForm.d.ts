/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PlaceCreateFormInputValues = {
    userID?: string;
    name?: string;
    fovorite?: boolean;
    comment?: string;
};
export declare type PlaceCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    fovorite?: ValidationFunction<boolean>;
    comment?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlaceCreateFormOverridesProps = {
    PlaceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    fovorite?: PrimitiveOverrideProps<SwitchFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlaceCreateFormProps = React.PropsWithChildren<{
    overrides?: PlaceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlaceCreateFormInputValues) => PlaceCreateFormInputValues;
    onSuccess?: (fields: PlaceCreateFormInputValues) => void;
    onError?: (fields: PlaceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlaceCreateFormInputValues) => PlaceCreateFormInputValues;
    onValidate?: PlaceCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlaceCreateForm(props: PlaceCreateFormProps): React.ReactElement;
