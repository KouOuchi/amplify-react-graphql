/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./src/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPlace = /* GraphQL */ `query GetPlace($id: ID!) {
  getPlace(id: $id) {
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
` as GeneratedQuery<APITypes.GetPlaceQueryVariables, APITypes.GetPlaceQuery>;
export const listPlaces = /* GraphQL */ `query ListPlaces(
  $filter: ModelPlaceFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      name
      fovorite
      comment
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlacesQueryVariables,
  APITypes.ListPlacesQuery
>;
export const getTool = /* GraphQL */ `query GetTool($id: ID!) {
  getTool(id: $id) {
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
` as GeneratedQuery<APITypes.GetToolQueryVariables, APITypes.GetToolQuery>;
export const listTools = /* GraphQL */ `query ListTools(
  $filter: ModelToolFilterInput
  $limit: Int
  $nextToken: String
) {
  listTools(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      life_hour
      life_current
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
}
` as GeneratedQuery<APITypes.ListToolsQueryVariables, APITypes.ListToolsQuery>;
