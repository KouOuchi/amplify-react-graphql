/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./src/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePlace = /* GraphQL */ `subscription OnCreatePlace(
  $filter: ModelSubscriptionPlaceFilterInput
  $owner: String
) {
  onCreatePlace(filter: $filter, owner: $owner) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreatePlaceSubscriptionVariables,
  APITypes.OnCreatePlaceSubscription
>;
export const onUpdatePlace = /* GraphQL */ `subscription OnUpdatePlace(
  $filter: ModelSubscriptionPlaceFilterInput
  $owner: String
) {
  onUpdatePlace(filter: $filter, owner: $owner) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlaceSubscriptionVariables,
  APITypes.OnUpdatePlaceSubscription
>;
export const onDeletePlace = /* GraphQL */ `subscription OnDeletePlace(
  $filter: ModelSubscriptionPlaceFilterInput
  $owner: String
) {
  onDeletePlace(filter: $filter, owner: $owner) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeletePlaceSubscriptionVariables,
  APITypes.OnDeletePlaceSubscription
>;
export const onCreateTool = /* GraphQL */ `subscription OnCreateTool(
  $filter: ModelSubscriptionToolFilterInput
  $owner: String
) {
  onCreateTool(filter: $filter, owner: $owner) {
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
    life_hour
    life_current
    comment
    createdAt
    updatedAt
    placeToolsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateToolSubscriptionVariables,
  APITypes.OnCreateToolSubscription
>;
export const onUpdateTool = /* GraphQL */ `subscription OnUpdateTool(
  $filter: ModelSubscriptionToolFilterInput
  $owner: String
) {
  onUpdateTool(filter: $filter, owner: $owner) {
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
    life_hour
    life_current
    comment
    createdAt
    updatedAt
    placeToolsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateToolSubscriptionVariables,
  APITypes.OnUpdateToolSubscription
>;
export const onDeleteTool = /* GraphQL */ `subscription OnDeleteTool(
  $filter: ModelSubscriptionToolFilterInput
  $owner: String
) {
  onDeleteTool(filter: $filter, owner: $owner) {
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
    life_hour
    life_current
    comment
    createdAt
    updatedAt
    placeToolsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteToolSubscriptionVariables,
  APITypes.OnDeleteToolSubscription
>;
