/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlaceInput = {
  place_id: string,
  userID: string,
  name?: string | null,
  fovorite?: boolean | null,
  comment?: string | null,
};

export type ModelPlaceConditionInput = {
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  fovorite?: ModelBooleanInput | null,
  comment?: ModelStringInput | null,
  and?: Array< ModelPlaceConditionInput | null > | null,
  or?: Array< ModelPlaceConditionInput | null > | null,
  not?: ModelPlaceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Place = {
  __typename: "Place",
  place_id: string,
  userID: string,
  name?: string | null,
  fovorite?: boolean | null,
  comment?: string | null,
  tools?: ModelToolConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelToolConnection = {
  __typename: "ModelToolConnection",
  items:  Array<Tool | null >,
  nextToken?: string | null,
};

export type Tool = {
  __typename: "Tool",
  tool_id: string,
  place?: Place | null,
  D?: number | null,
  H?: number | null,
  R?: number | null,
  Ds?: number | null,
  L1?: number | null,
  TipR?: number | null,
  part_name?: string | null,
  part_code?: string | null,
  count?: number | null,
  life_hour_spec?: number | null,
  life_hour_current?: number | null,
  comment?: string | null,
  createdAt: string,
  updatedAt: string,
  placeToolsPlace_id?: string | null,
};

export type UpdatePlaceInput = {
  place_id: string,
  userID?: string | null,
  name?: string | null,
  fovorite?: boolean | null,
  comment?: string | null,
};

export type DeletePlaceInput = {
  place_id: string,
};

export type CreateToolInput = {
  tool_id: string,
  D?: number | null,
  H?: number | null,
  R?: number | null,
  Ds?: number | null,
  L1?: number | null,
  TipR?: number | null,
  part_name?: string | null,
  part_code?: string | null,
  count?: number | null,
  life_hour_spec?: number | null,
  life_hour_current?: number | null,
  comment?: string | null,
  placeToolsPlace_id?: string | null,
};

export type ModelToolConditionInput = {
  D?: ModelFloatInput | null,
  H?: ModelFloatInput | null,
  R?: ModelFloatInput | null,
  Ds?: ModelFloatInput | null,
  L1?: ModelFloatInput | null,
  TipR?: ModelIntInput | null,
  part_name?: ModelStringInput | null,
  part_code?: ModelStringInput | null,
  count?: ModelIntInput | null,
  life_hour_spec?: ModelIntInput | null,
  life_hour_current?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  and?: Array< ModelToolConditionInput | null > | null,
  or?: Array< ModelToolConditionInput | null > | null,
  not?: ModelToolConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  placeToolsPlace_id?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateToolInput = {
  tool_id: string,
  D?: number | null,
  H?: number | null,
  R?: number | null,
  Ds?: number | null,
  L1?: number | null,
  TipR?: number | null,
  part_name?: string | null,
  part_code?: string | null,
  count?: number | null,
  life_hour_spec?: number | null,
  life_hour_current?: number | null,
  comment?: string | null,
  placeToolsPlace_id?: string | null,
};

export type DeleteToolInput = {
  tool_id: string,
};

export type ModelPlaceFilterInput = {
  place_id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  fovorite?: ModelBooleanInput | null,
  comment?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlaceFilterInput | null > | null,
  or?: Array< ModelPlaceFilterInput | null > | null,
  not?: ModelPlaceFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPlaceConnection = {
  __typename: "ModelPlaceConnection",
  items:  Array<Place | null >,
  nextToken?: string | null,
};

export type ModelToolFilterInput = {
  tool_id?: ModelIDInput | null,
  D?: ModelFloatInput | null,
  H?: ModelFloatInput | null,
  R?: ModelFloatInput | null,
  Ds?: ModelFloatInput | null,
  L1?: ModelFloatInput | null,
  TipR?: ModelIntInput | null,
  part_name?: ModelStringInput | null,
  part_code?: ModelStringInput | null,
  count?: ModelIntInput | null,
  life_hour_spec?: ModelIntInput | null,
  life_hour_current?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelToolFilterInput | null > | null,
  or?: Array< ModelToolFilterInput | null > | null,
  not?: ModelToolFilterInput | null,
  placeToolsPlace_id?: ModelIDInput | null,
};

export type ModelSubscriptionPlaceFilterInput = {
  place_id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  fovorite?: ModelSubscriptionBooleanInput | null,
  comment?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlaceFilterInput | null > | null,
  placeToolsPlace_id?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionToolFilterInput = {
  tool_id?: ModelSubscriptionIDInput | null,
  D?: ModelSubscriptionFloatInput | null,
  H?: ModelSubscriptionFloatInput | null,
  R?: ModelSubscriptionFloatInput | null,
  Ds?: ModelSubscriptionFloatInput | null,
  L1?: ModelSubscriptionFloatInput | null,
  TipR?: ModelSubscriptionIntInput | null,
  part_name?: ModelSubscriptionStringInput | null,
  part_code?: ModelSubscriptionStringInput | null,
  count?: ModelSubscriptionIntInput | null,
  life_hour_spec?: ModelSubscriptionIntInput | null,
  life_hour_current?: ModelSubscriptionIntInput | null,
  comment?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionToolFilterInput | null > | null,
  or?: Array< ModelSubscriptionToolFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreatePlaceMutationVariables = {
  input: CreatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type CreatePlaceMutation = {
  createPlace?:  {
    __typename: "Place",
    place_id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        tool_id: string,
        D?: number | null,
        H?: number | null,
        R?: number | null,
        Ds?: number | null,
        L1?: number | null,
        TipR?: number | null,
        part_name?: string | null,
        part_code?: string | null,
        count?: number | null,
        life_hour_spec?: number | null,
        life_hour_current?: number | null,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
        placeToolsPlace_id?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlaceMutationVariables = {
  input: UpdatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceMutation = {
  updatePlace?:  {
    __typename: "Place",
    place_id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        tool_id: string,
        D?: number | null,
        H?: number | null,
        R?: number | null,
        Ds?: number | null,
        L1?: number | null,
        TipR?: number | null,
        part_name?: string | null,
        part_code?: string | null,
        count?: number | null,
        life_hour_spec?: number | null,
        life_hour_current?: number | null,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
        placeToolsPlace_id?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlaceMutationVariables = {
  input: DeletePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type DeletePlaceMutation = {
  deletePlace?:  {
    __typename: "Place",
    place_id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        tool_id: string,
        D?: number | null,
        H?: number | null,
        R?: number | null,
        Ds?: number | null,
        L1?: number | null,
        TipR?: number | null,
        part_name?: string | null,
        part_code?: string | null,
        count?: number | null,
        life_hour_spec?: number | null,
        life_hour_current?: number | null,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
        placeToolsPlace_id?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateToolMutationVariables = {
  input: CreateToolInput,
  condition?: ModelToolConditionInput | null,
};

export type CreateToolMutation = {
  createTool?:  {
    __typename: "Tool",
    tool_id: string,
    place?:  {
      __typename: "Place",
      place_id: string,
      userID: string,
      name?: string | null,
      fovorite?: boolean | null,
      comment?: string | null,
      tools?:  {
        __typename: "ModelToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    D?: number | null,
    H?: number | null,
    R?: number | null,
    Ds?: number | null,
    L1?: number | null,
    TipR?: number | null,
    part_name?: string | null,
    part_code?: string | null,
    count?: number | null,
    life_hour_spec?: number | null,
    life_hour_current?: number | null,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
    placeToolsPlace_id?: string | null,
  } | null,
};

export type UpdateToolMutationVariables = {
  input: UpdateToolInput,
  condition?: ModelToolConditionInput | null,
};

export type UpdateToolMutation = {
  updateTool?:  {
    __typename: "Tool",
    tool_id: string,
    place?:  {
      __typename: "Place",
      place_id: string,
      userID: string,
      name?: string | null,
      fovorite?: boolean | null,
      comment?: string | null,
      tools?:  {
        __typename: "ModelToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    D?: number | null,
    H?: number | null,
    R?: number | null,
    Ds?: number | null,
    L1?: number | null,
    TipR?: number | null,
    part_name?: string | null,
    part_code?: string | null,
    count?: number | null,
    life_hour_spec?: number | null,
    life_hour_current?: number | null,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
    placeToolsPlace_id?: string | null,
  } | null,
};

export type DeleteToolMutationVariables = {
  input: DeleteToolInput,
  condition?: ModelToolConditionInput | null,
};

export type DeleteToolMutation = {
  deleteTool?:  {
    __typename: "Tool",
    tool_id: string,
    place?:  {
      __typename: "Place",
      place_id: string,
      userID: string,
      name?: string | null,
      fovorite?: boolean | null,
      comment?: string | null,
      tools?:  {
        __typename: "ModelToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    D?: number | null,
    H?: number | null,
    R?: number | null,
    Ds?: number | null,
    L1?: number | null,
    TipR?: number | null,
    part_name?: string | null,
    part_code?: string | null,
    count?: number | null,
    life_hour_spec?: number | null,
    life_hour_current?: number | null,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
    placeToolsPlace_id?: string | null,
  } | null,
};

export type GetPlaceQueryVariables = {
  place_id: string,
};

export type GetPlaceQuery = {
  getPlace?:  {
    __typename: "Place",
    place_id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        tool_id: string,
        D?: number | null,
        H?: number | null,
        R?: number | null,
        Ds?: number | null,
        L1?: number | null,
        TipR?: number | null,
        part_name?: string | null,
        part_code?: string | null,
        count?: number | null,
        life_hour_spec?: number | null,
        life_hour_current?: number | null,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
        placeToolsPlace_id?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlacesQueryVariables = {
  place_id?: string | null,
  filter?: ModelPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPlacesQuery = {
  listPlaces?:  {
    __typename: "ModelPlaceConnection",
    items:  Array< {
      __typename: "Place",
      place_id: string,
      userID: string,
      name?: string | null,
      fovorite?: boolean | null,
      comment?: string | null,
      tools?:  {
        __typename: "ModelToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetToolQueryVariables = {
  tool_id: string,
};

export type GetToolQuery = {
  getTool?:  {
    __typename: "Tool",
    tool_id: string,
    place?:  {
      __typename: "Place",
      place_id: string,
      userID: string,
      name?: string | null,
      fovorite?: boolean | null,
      comment?: string | null,
      tools?:  {
        __typename: "ModelToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    D?: number | null,
    H?: number | null,
    R?: number | null,
    Ds?: number | null,
    L1?: number | null,
    TipR?: number | null,
    part_name?: string | null,
    part_code?: string | null,
    count?: number | null,
    life_hour_spec?: number | null,
    life_hour_current?: number | null,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
    placeToolsPlace_id?: string | null,
  } | null,
};

export type ListToolsQueryVariables = {
  tool_id?: string | null,
  filter?: ModelToolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListToolsQuery = {
  listTools?:  {
    __typename: "ModelToolConnection",
    items:  Array< {
      __typename: "Tool",
      tool_id: string,
      place?:  {
        __typename: "Place",
        place_id: string,
        userID: string,
        name?: string | null,
        fovorite?: boolean | null,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      D?: number | null,
      H?: number | null,
      R?: number | null,
      Ds?: number | null,
      L1?: number | null,
      TipR?: number | null,
      part_name?: string | null,
      part_code?: string | null,
      count?: number | null,
      life_hour_spec?: number | null,
      life_hour_current?: number | null,
      comment?: string | null,
      createdAt: string,
      updatedAt: string,
      placeToolsPlace_id?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace?:  {
    __typename: "Place",
    place_id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        tool_id: string,
        D?: number | null,
        H?: number | null,
        R?: number | null,
        Ds?: number | null,
        L1?: number | null,
        TipR?: number | null,
        part_name?: string | null,
        part_code?: string | null,
        count?: number | null,
        life_hour_spec?: number | null,
        life_hour_current?: number | null,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
        placeToolsPlace_id?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
};

export type OnUpdatePlaceSubscription = {
  onUpdatePlace?:  {
    __typename: "Place",
    place_id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        tool_id: string,
        D?: number | null,
        H?: number | null,
        R?: number | null,
        Ds?: number | null,
        L1?: number | null,
        TipR?: number | null,
        part_name?: string | null,
        part_code?: string | null,
        count?: number | null,
        life_hour_spec?: number | null,
        life_hour_current?: number | null,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
        placeToolsPlace_id?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
};

export type OnDeletePlaceSubscription = {
  onDeletePlace?:  {
    __typename: "Place",
    place_id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        tool_id: string,
        D?: number | null,
        H?: number | null,
        R?: number | null,
        Ds?: number | null,
        L1?: number | null,
        TipR?: number | null,
        part_name?: string | null,
        part_code?: string | null,
        count?: number | null,
        life_hour_spec?: number | null,
        life_hour_current?: number | null,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
        placeToolsPlace_id?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateToolSubscriptionVariables = {
  filter?: ModelSubscriptionToolFilterInput | null,
};

export type OnCreateToolSubscription = {
  onCreateTool?:  {
    __typename: "Tool",
    tool_id: string,
    place?:  {
      __typename: "Place",
      place_id: string,
      userID: string,
      name?: string | null,
      fovorite?: boolean | null,
      comment?: string | null,
      tools?:  {
        __typename: "ModelToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    D?: number | null,
    H?: number | null,
    R?: number | null,
    Ds?: number | null,
    L1?: number | null,
    TipR?: number | null,
    part_name?: string | null,
    part_code?: string | null,
    count?: number | null,
    life_hour_spec?: number | null,
    life_hour_current?: number | null,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
    placeToolsPlace_id?: string | null,
  } | null,
};

export type OnUpdateToolSubscriptionVariables = {
  filter?: ModelSubscriptionToolFilterInput | null,
};

export type OnUpdateToolSubscription = {
  onUpdateTool?:  {
    __typename: "Tool",
    tool_id: string,
    place?:  {
      __typename: "Place",
      place_id: string,
      userID: string,
      name?: string | null,
      fovorite?: boolean | null,
      comment?: string | null,
      tools?:  {
        __typename: "ModelToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    D?: number | null,
    H?: number | null,
    R?: number | null,
    Ds?: number | null,
    L1?: number | null,
    TipR?: number | null,
    part_name?: string | null,
    part_code?: string | null,
    count?: number | null,
    life_hour_spec?: number | null,
    life_hour_current?: number | null,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
    placeToolsPlace_id?: string | null,
  } | null,
};

export type OnDeleteToolSubscriptionVariables = {
  filter?: ModelSubscriptionToolFilterInput | null,
};

export type OnDeleteToolSubscription = {
  onDeleteTool?:  {
    __typename: "Tool",
    tool_id: string,
    place?:  {
      __typename: "Place",
      place_id: string,
      userID: string,
      name?: string | null,
      fovorite?: boolean | null,
      comment?: string | null,
      tools?:  {
        __typename: "ModelToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    D?: number | null,
    H?: number | null,
    R?: number | null,
    Ds?: number | null,
    L1?: number | null,
    TipR?: number | null,
    part_name?: string | null,
    part_code?: string | null,
    count?: number | null,
    life_hour_spec?: number | null,
    life_hour_current?: number | null,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
    placeToolsPlace_id?: string | null,
  } | null,
};
