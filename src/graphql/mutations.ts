/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPlace = /* GraphQL */ `mutation CreatePlace(
  $input: CreatePlaceInput!
  $condition: ModelPlaceConditionInput
) {
  createPlace(input: $input, condition: $condition) {
    id
    userID
    name
    fovorite
    comment
    tools {
      items {
        id
        D
        H
        R
        Ds
        L1
        TipR
        part_name
        part_code
        count
        life_hour_spec
        life_hour_current
        comment
        createdAt
        updatedAt
        placeToolsId
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePlaceMutationVariables,
  APITypes.CreatePlaceMutation
>;
export const updatePlace = /* GraphQL */ `mutation UpdatePlace(
  $input: UpdatePlaceInput!
  $condition: ModelPlaceConditionInput
) {
  updatePlace(input: $input, condition: $condition) {
    id
    userID
    name
    fovorite
    comment
    tools {
      items {
        id
        D
        H
        R
        Ds
        L1
        TipR
        part_name
        part_code
        count
        life_hour_spec
        life_hour_current
        comment
        createdAt
        updatedAt
        placeToolsId
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePlaceMutationVariables,
  APITypes.UpdatePlaceMutation
>;
export const deletePlace = /* GraphQL */ `mutation DeletePlace(
  $input: DeletePlaceInput!
  $condition: ModelPlaceConditionInput
) {
  deletePlace(input: $input, condition: $condition) {
    id
    userID
    name
    fovorite
    comment
    tools {
      items {
        id
        D
        H
        R
        Ds
        L1
        TipR
        part_name
        part_code
        count
        life_hour_spec
        life_hour_current
        comment
        createdAt
        updatedAt
        placeToolsId
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePlaceMutationVariables,
  APITypes.DeletePlaceMutation
>;
export const createTool = /* GraphQL */ `mutation CreateTool(
  $input: CreateToolInput!
  $condition: ModelToolConditionInput
) {
  createTool(input: $input, condition: $condition) {
    id
    place {
      id
      userID
      name
      fovorite
      comment
      tools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    D
    H
    R
    Ds
    L1
    TipR
    part_name
    part_code
    count
    life_hour_spec
    life_hour_current
    comment
    createdAt
    updatedAt
    placeToolsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateToolMutationVariables,
  APITypes.CreateToolMutation
>;
export const updateTool = /* GraphQL */ `mutation UpdateTool(
  $input: UpdateToolInput!
  $condition: ModelToolConditionInput
) {
  updateTool(input: $input, condition: $condition) {
    id
    place {
      id
      userID
      name
      fovorite
      comment
      tools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    D
    H
    R
    Ds
    L1
    TipR
    part_name
    part_code
    count
    life_hour_spec
    life_hour_current
    comment
    createdAt
    updatedAt
    placeToolsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateToolMutationVariables,
  APITypes.UpdateToolMutation
>;
export const deleteTool = /* GraphQL */ `mutation DeleteTool(
  $input: DeleteToolInput!
  $condition: ModelToolConditionInput
) {
  deleteTool(input: $input, condition: $condition) {
    id
    place {
      id
      userID
      name
      fovorite
      comment
      tools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    D
    H
    R
    Ds
    L1
    TipR
    part_name
    part_code
    count
    life_hour_spec
    life_hour_current
    comment
    createdAt
    updatedAt
    placeToolsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteToolMutationVariables,
  APITypes.DeleteToolMutation
>;
