/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePlace = /* GraphQL */ `subscription OnCreatePlace($filter: ModelSubscriptionPlaceFilterInput) {
  onCreatePlace(filter: $filter) {
    place_id
    userID
    name
    fovorite
    comment
    tools {
      items {
        tool_id
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
        placeToolsPlace_id
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlaceSubscriptionVariables,
  APITypes.OnCreatePlaceSubscription
>;
export const onUpdatePlace = /* GraphQL */ `subscription OnUpdatePlace($filter: ModelSubscriptionPlaceFilterInput) {
  onUpdatePlace(filter: $filter) {
    place_id
    userID
    name
    fovorite
    comment
    tools {
      items {
        tool_id
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
        placeToolsPlace_id
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlaceSubscriptionVariables,
  APITypes.OnUpdatePlaceSubscription
>;
export const onDeletePlace = /* GraphQL */ `subscription OnDeletePlace($filter: ModelSubscriptionPlaceFilterInput) {
  onDeletePlace(filter: $filter) {
    place_id
    userID
    name
    fovorite
    comment
    tools {
      items {
        tool_id
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
        placeToolsPlace_id
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlaceSubscriptionVariables,
  APITypes.OnDeletePlaceSubscription
>;
export const onCreateTool = /* GraphQL */ `subscription OnCreateTool($filter: ModelSubscriptionToolFilterInput) {
  onCreateTool(filter: $filter) {
    tool_id
    place {
      place_id
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
    placeToolsPlace_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateToolSubscriptionVariables,
  APITypes.OnCreateToolSubscription
>;
export const onUpdateTool = /* GraphQL */ `subscription OnUpdateTool($filter: ModelSubscriptionToolFilterInput) {
  onUpdateTool(filter: $filter) {
    tool_id
    place {
      place_id
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
    placeToolsPlace_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateToolSubscriptionVariables,
  APITypes.OnUpdateToolSubscription
>;
export const onDeleteTool = /* GraphQL */ `subscription OnDeleteTool($filter: ModelSubscriptionToolFilterInput) {
  onDeleteTool(filter: $filter) {
    tool_id
    place {
      place_id
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
    placeToolsPlace_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteToolSubscriptionVariables,
  APITypes.OnDeleteToolSubscription
>;
