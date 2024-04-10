/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlaceInput = {
  id?: string | null,
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
  owner?: ModelStringInput | null,
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
  id: string,
  userID: string,
  name?: string | null,
  fovorite?: boolean | null,
  comment?: string | null,
  tools?: ModelToolConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelToolConnection = {
  __typename: "ModelToolConnection",
  items:  Array<Tool | null >,
  nextToken?: string | null,
};

export type Tool = {
  __typename: "Tool",
  id: string,
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
  placeToolsId?: string | null,
  owner?: string | null,
};

export type UpdatePlaceInput = {
  id: string,
  userID?: string | null,
  name?: string | null,
  fovorite?: boolean | null,
  comment?: string | null,
};

export type DeletePlaceInput = {
  id: string,
};

export type CreateToolInput = {
  id?: string | null,
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
  placeToolsId?: string | null,
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
  placeToolsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
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
  id: string,
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
  placeToolsId?: string | null,
};

export type DeleteToolInput = {
  id: string,
};

export type ModelPlaceFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  fovorite?: ModelBooleanInput | null,
  comment?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlaceFilterInput | null > | null,
  or?: Array< ModelPlaceFilterInput | null > | null,
  not?: ModelPlaceFilterInput | null,
  owner?: ModelStringInput | null,
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
  id?: ModelIDInput | null,
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
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelToolFilterInput | null > | null,
  or?: Array< ModelToolFilterInput | null > | null,
  not?: ModelToolFilterInput | null,
  placeToolsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionPlaceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  fovorite?: ModelSubscriptionBooleanInput | null,
  comment?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlaceFilterInput | null > | null,
  placeToolsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
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
  id?: ModelSubscriptionIDInput | null,
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
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionToolFilterInput | null > | null,
  or?: Array< ModelSubscriptionToolFilterInput | null > | null,
  owner?: ModelStringInput | null,
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
    id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        id: string,
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
        placeToolsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePlaceMutationVariables = {
  input: UpdatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceMutation = {
  updatePlace?:  {
    __typename: "Place",
    id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        id: string,
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
        placeToolsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePlaceMutationVariables = {
  input: DeletePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type DeletePlaceMutation = {
  deletePlace?:  {
    __typename: "Place",
    id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        id: string,
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
        placeToolsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateToolMutationVariables = {
  input: CreateToolInput,
  condition?: ModelToolConditionInput | null,
};

export type CreateToolMutation = {
  createTool?:  {
    __typename: "Tool",
    id: string,
    place?:  {
      __typename: "Place",
      id: string,
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
      owner?: string | null,
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
    placeToolsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateToolMutationVariables = {
  input: UpdateToolInput,
  condition?: ModelToolConditionInput | null,
};

export type UpdateToolMutation = {
  updateTool?:  {
    __typename: "Tool",
    id: string,
    place?:  {
      __typename: "Place",
      id: string,
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
      owner?: string | null,
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
    placeToolsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteToolMutationVariables = {
  input: DeleteToolInput,
  condition?: ModelToolConditionInput | null,
};

export type DeleteToolMutation = {
  deleteTool?:  {
    __typename: "Tool",
    id: string,
    place?:  {
      __typename: "Place",
      id: string,
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
      owner?: string | null,
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
    placeToolsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetPlaceQueryVariables = {
  id: string,
};

export type GetPlaceQuery = {
  getPlace?:  {
    __typename: "Place",
    id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        id: string,
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
        placeToolsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPlacesQueryVariables = {
  id?: string | null,
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
      id: string,
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
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetToolQueryVariables = {
  id: string,
};

export type GetToolQuery = {
  getTool?:  {
    __typename: "Tool",
    id: string,
    place?:  {
      __typename: "Place",
      id: string,
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
      owner?: string | null,
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
    placeToolsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListToolsQueryVariables = {
  id?: string | null,
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
      id: string,
      place?:  {
        __typename: "Place",
        id: string,
        userID: string,
        name?: string | null,
        fovorite?: boolean | null,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
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
      placeToolsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
  owner?: string | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace?:  {
    __typename: "Place",
    id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        id: string,
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
        placeToolsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePlaceSubscription = {
  onUpdatePlace?:  {
    __typename: "Place",
    id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        id: string,
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
        placeToolsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
  owner?: string | null,
};

export type OnDeletePlaceSubscription = {
  onDeletePlace?:  {
    __typename: "Place",
    id: string,
    userID: string,
    name?: string | null,
    fovorite?: boolean | null,
    comment?: string | null,
    tools?:  {
      __typename: "ModelToolConnection",
      items:  Array< {
        __typename: "Tool",
        id: string,
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
        placeToolsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateToolSubscriptionVariables = {
  filter?: ModelSubscriptionToolFilterInput | null,
  owner?: string | null,
};

export type OnCreateToolSubscription = {
  onCreateTool?:  {
    __typename: "Tool",
    id: string,
    place?:  {
      __typename: "Place",
      id: string,
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
      owner?: string | null,
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
    placeToolsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateToolSubscriptionVariables = {
  filter?: ModelSubscriptionToolFilterInput | null,
  owner?: string | null,
};

export type OnUpdateToolSubscription = {
  onUpdateTool?:  {
    __typename: "Tool",
    id: string,
    place?:  {
      __typename: "Place",
      id: string,
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
      owner?: string | null,
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
    placeToolsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteToolSubscriptionVariables = {
  filter?: ModelSubscriptionToolFilterInput | null,
  owner?: string | null,
};

export type OnDeleteToolSubscription = {
  onDeleteTool?:  {
    __typename: "Tool",
    id: string,
    place?:  {
      __typename: "Place",
      id: string,
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
      owner?: string | null,
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
    placeToolsId?: string | null,
    owner?: string | null,
  } | null,
};
