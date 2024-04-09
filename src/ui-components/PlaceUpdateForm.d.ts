/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Place } from "../API.tsx";
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
export declare type PlaceUpdateFormInputValues = {
    userID?: string;
    name?: string;
    fovorite?: boolean;
    comment?: string;
};
export declare type PlaceUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    fovorite?: ValidationFunction<boolean>;
    comment?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlaceUpdateFormOverridesProps = {
    PlaceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    fovorite?: PrimitiveOverrideProps<SwitchFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlaceUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlaceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    place?: Place;
    onSubmit?: (fields: PlaceUpdateFormInputValues) => PlaceUpdateFormInputValues;
    onSuccess?: (fields: PlaceUpdateFormInputValues) => void;
    onError?: (fields: PlaceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlaceUpdateFormInputValues) => PlaceUpdateFormInputValues;
    onValidate?: PlaceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlaceUpdateForm(props: PlaceUpdateFormProps): React.ReactElement;
