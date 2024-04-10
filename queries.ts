/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./src/src/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPlace = /* GraphQL */ `query GetPlace($place_id: ID!) {
  getPlace(place_id: $place_id) {
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
}
` as GeneratedQuery<APITypes.GetPlaceQueryVariables, APITypes.GetPlaceQuery>;
export const listPlaces = /* GraphQL */ `query ListPlaces(
  $place_id: ID
  $filter: ModelPlaceFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPlaces(
    place_id: $place_id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      place_id
      userID
      name
      fovorite
      comment
      createdAt
      updatedAt
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
export const getTool = /* GraphQL */ `query GetTool($tool_id: ID!) {
  getTool(tool_id: $tool_id) {
    tool_id
    place {
      place_id
      userID
      name
      fovorite
      comment
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
` as GeneratedQuery<APITypes.GetToolQueryVariables, APITypes.GetToolQuery>;
export const listTools = /* GraphQL */ `query ListTools(
  $tool_id: ID
  $filter: ModelToolFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTools(
    tool_id: $tool_id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
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
}
` as GeneratedQuery<APITypes.ListToolsQueryVariables, APITypes.ListToolsQuery>;
