/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTool } from "../graphql/queries";
import { updateTool } from "../graphql/mutations";
const client = generateClient();
export default function ToolUpdateForm(props) {
  const {
    id: idProp,
    tool: toolModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    D: "",
    H: "",
    R: "",
    Ds: "",
    L1: "",
    TipR: "",
    part_name: "",
    part_code: "",
    count: "",
    life_hour_spec: "",
    life_hour_current: "",
    comment: "",
  };
  const [D, setD] = React.useState(initialValues.D);
  const [H, setH] = React.useState(initialValues.H);
  const [R, setR] = React.useState(initialValues.R);
  const [Ds, setDs] = React.useState(initialValues.Ds);
  const [L1, setL1] = React.useState(initialValues.L1);
  const [TipR, setTipR] = React.useState(initialValues.TipR);
  const [part_name, setPart_name] = React.useState(initialValues.part_name);
  const [part_code, setPart_code] = React.useState(initialValues.part_code);
  const [count, setCount] = React.useState(initialValues.count);
  const [life_hour_spec, setLife_hour_spec] = React.useState(
    initialValues.life_hour_spec
  );
  const [life_hour_current, setLife_hour_current] = React.useState(
    initialValues.life_hour_current
  );
  const [comment, setComment] = React.useState(initialValues.comment);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = toolRecord
      ? { ...initialValues, ...toolRecord }
      : initialValues;
    setD(cleanValues.D);
    setH(cleanValues.H);
    setR(cleanValues.R);
    setDs(cleanValues.Ds);
    setL1(cleanValues.L1);
    setTipR(cleanValues.TipR);
    setPart_name(cleanValues.part_name);
    setPart_code(cleanValues.part_code);
    setCount(cleanValues.count);
    setLife_hour_spec(cleanValues.life_hour_spec);
    setLife_hour_current(cleanValues.life_hour_current);
    setComment(cleanValues.comment);
    setErrors({});
  };
  const [toolRecord, setToolRecord] = React.useState(toolModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTool.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTool
        : toolModelProp;
      setToolRecord(record);
    };
    queryData();
  }, [idProp, toolModelProp]);
  React.useEffect(resetStateValues, [toolRecord]);
  const validations = {
    D: [],
    H: [],
    R: [],
    Ds: [],
    L1: [],
    TipR: [],
    part_name: [],
    part_code: [],
    count: [],
    life_hour_spec: [],
    life_hour_current: [],
    comment: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          D: D ?? null,
          H: H ?? null,
          R: R ?? null,
          Ds: Ds ?? null,
          L1: L1 ?? null,
          TipR: TipR ?? null,
          part_name: part_name ?? null,
          part_code: part_code ?? null,
          count: count ?? null,
          life_hour_spec: life_hour_spec ?? null,
          life_hour_current: life_hour_current ?? null,
          comment: comment ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateTool.replaceAll("__typename", ""),
            variables: {
              input: {
                id: toolRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ToolUpdateForm")}
      {...rest}
    >
      <TextField
        label="D"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={D}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              D: value,
              H,
              R,
              Ds,
              L1,
              TipR,
              part_name,
              part_code,
              count,
              life_hour_spec,
              life_hour_current,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.D ?? value;
          }
          if (errors.D?.hasError) {
            runValidationTasks("D", value);
          }
          setD(value);
        }}
        onBlur={() => runValidationTasks("D", D)}
        errorMessage={errors.D?.errorMessage}
        hasError={errors.D?.hasError}
        {...getOverrideProps(overrides, "D")}
      ></TextField>
      <TextField
        label="H"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={H}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              D,
              H: value,
              R,
              Ds,
              L1,
              TipR,
              part_name,
              part_code,
              count,
              life_hour_spec,
              life_hour_current,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.H ?? value;
          }
          if (errors.H?.hasError) {
            runValidationTasks("H", value);
          }
          setH(value);
        }}
        onBlur={() => runValidationTasks("H", H)}
        errorMessage={errors.H?.errorMessage}
        hasError={errors.H?.hasError}
        {...getOverrideProps(overrides, "H")}
      ></TextField>
      <TextField
        label="R"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={R}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              D,
              H,
              R: value,
              Ds,
              L1,
              TipR,
              part_name,
              part_code,
              count,
              life_hour_spec,
              life_hour_current,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.R ?? value;
          }
          if (errors.R?.hasError) {
            runValidationTasks("R", value);
          }
          setR(value);
        }}
        onBlur={() => runValidationTasks("R", R)}
        errorMessage={errors.R?.errorMessage}
        hasError={errors.R?.hasError}
        {...getOverrideProps(overrides, "R")}
      ></TextField>
      <TextField
        label="Ds"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Ds}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              D,
              H,
              R,
              Ds: value,
              L1,
              TipR,
              part_name,
              part_code,
              count,
              life_hour_spec,
              life_hour_current,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.Ds ?? value;
          }
          if (errors.Ds?.hasError) {
            runValidationTasks("Ds", value);
          }
          setDs(value);
        }}
        onBlur={() => runValidationTasks("Ds", Ds)}
        errorMessage={errors.Ds?.errorMessage}
        hasError={errors.Ds?.hasError}
        {...getOverrideProps(overrides, "Ds")}
      ></TextField>
      <TextField
        label="L1"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={L1}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              D,
              H,
              R,
              Ds,
              L1: value,
              TipR,
              part_name,
              part_code,
              count,
              life_hour_spec,
              life_hour_current,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.L1 ?? value;
          }
          if (errors.L1?.hasError) {
            runValidationTasks("L1", value);
          }
          setL1(value);
        }}
        onBlur={() => runValidationTasks("L1", L1)}
        errorMessage={errors.L1?.errorMessage}
        hasError={errors.L1?.hasError}
        {...getOverrideProps(overrides, "L1")}
      ></TextField>
      <TextField
        label="Tip r"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TipR}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              D,
              H,
              R,
              Ds,
              L1,
              TipR: value,
              part_name,
              part_code,
              count,
              life_hour_spec,
              life_hour_current,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.TipR ?? value;
          }
          if (errors.TipR?.hasError) {
            runValidationTasks("TipR", value);
          }
          setTipR(value);
        }}
        onBlur={() => runValidationTasks("TipR", TipR)}
        errorMessage={errors.TipR?.errorMessage}
        hasError={errors.TipR?.hasError}
        {...getOverrideProps(overrides, "TipR")}
      ></TextField>
      <TextField
        label="Part name"
        isRequired={false}
        isReadOnly={false}
        value={part_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              D,
              H,
              R,
              Ds,
              L1,
              TipR,
              part_name: value,
              part_code,
              count,
              life_hour_spec,
              life_hour_current,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.part_name ?? value;
          }
          if (errors.part_name?.hasError) {
            runValidationTasks("part_name", value);
          }
          setPart_name(value);
        }}
        onBlur={() => runValidationTasks("part_name", part_name)}
        errorMessage={errors.part_name?.errorMessage}
        hasError={errors.part_name?.hasError}
        {...getOverrideProps(overrides, "part_name")}
      ></TextField>
      <TextField
        label="Part code"
        isRequired={false}
        isReadOnly={false}
        value={part_code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              D,
              H,
              R,
              Ds,
              L1,
              TipR,
              part_name,
              part_code: value,
              count,
              life_hour_spec,
              life_hour_current,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.part_code ?? value;
          }
          if (errors.part_code?.hasError) {
            runValidationTasks("part_code", value);
          }
          setPart_code(value);
        }}
        onBlur={() => runValidationTasks("part_code", part_code)}
        errorMessage={errors.part_code?.errorMessage}
        hasError={errors.part_code?.hasError}
        {...getOverrideProps(overrides, "part_code")}
      ></TextField>
      <TextField
        label="Count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={count}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              D,
              H,
              R,
              Ds,
              L1,
              TipR,
              part_name,
              part_code,
              count: value,
              life_hour_spec,
              life_hour_current,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.count ?? value;
          }
          if (errors.count?.hasError) {
            runValidationTasks("count", value);
          }
          setCount(value);
        }}
        onBlur={() => runValidationTasks("count", count)}
        errorMessage={errors.count?.errorMessage}
        hasError={errors.count?.hasError}
        {...getOverrideProps(overrides, "count")}
      ></TextField>
      <TextField
        label="Life hour spec"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={life_hour_spec}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              D,
              H,
              R,
              Ds,
              L1,
              TipR,
              part_name,
              part_code,
              count,
              life_hour_spec: value,
              life_hour_current,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.life_hour_spec ?? value;
          }
          if (errors.life_hour_spec?.hasError) {
            runValidationTasks("life_hour_spec", value);
          }
          setLife_hour_spec(value);
        }}
        onBlur={() => runValidationTasks("life_hour_spec", life_hour_spec)}
        errorMessage={errors.life_hour_spec?.errorMessage}
        hasError={errors.life_hour_spec?.hasError}
        {...getOverrideProps(overrides, "life_hour_spec")}
      ></TextField>
      <TextField
        label="Life hour current"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={life_hour_current}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              D,
              H,
              R,
              Ds,
              L1,
              TipR,
              part_name,
              part_code,
              count,
              life_hour_spec,
              life_hour_current: value,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.life_hour_current ?? value;
          }
          if (errors.life_hour_current?.hasError) {
            runValidationTasks("life_hour_current", value);
          }
          setLife_hour_current(value);
        }}
        onBlur={() =>
          runValidationTasks("life_hour_current", life_hour_current)
        }
        errorMessage={errors.life_hour_current?.errorMessage}
        hasError={errors.life_hour_current?.hasError}
        {...getOverrideProps(overrides, "life_hour_current")}
      ></TextField>
      <TextField
        label="Comment"
        isRequired={false}
        isReadOnly={false}
        value={comment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              D,
              H,
              R,
              Ds,
              L1,
              TipR,
              part_name,
              part_code,
              count,
              life_hour_spec,
              life_hour_current,
              comment: value,
            };
            const result = onChange(modelFields);
            value = result?.comment ?? value;
          }
          if (errors.comment?.hasError) {
            runValidationTasks("comment", value);
          }
          setComment(value);
        }}
        onBlur={() => runValidationTasks("comment", comment)}
        errorMessage={errors.comment?.errorMessage}
        hasError={errors.comment?.hasError}
        {...getOverrideProps(overrides, "comment")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || toolModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || toolModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
