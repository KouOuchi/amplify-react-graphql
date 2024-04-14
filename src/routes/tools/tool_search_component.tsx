import React, { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Outlet, 
         Link,
         NavLink,
         Form,
         ActionFunction,
         LoaderFunction,
         useLoaderData,
         useNavigation,
         redirect, } from "react-router-dom";
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { Place, Tool } from '../../API';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

const drawerBleeding = 20;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

export const action:ActionFunction = async ({request, params}) => {
  console.debug('@action start');
  const formData = await request.formData();
  const place_id = formData.get("place_id");

  try {
    return redirect(`place/${place_id}`);
  } finally {
    console.debug('@action end');
  }
};

export const loader:LoaderFunction = async ({params}) => {
  const fetchPlaces = async () => {
    try {
      const client = generateClient();
      const placesData = await client.graphql({ query: queries.listPlaces });
      return placesData.data.listPlaces.items as Array<Place>;

    } catch (err) {
      console.error('error fetching Places', err);
    }
  };

  return fetchPlaces();
};

export interface ToolSearchCondition {
  place_id: string;
  tip_type: string;
  D: number;
  R: number;
  Ds: number;
  L: number;
  L1: number;
}

export type ToolResultContextType = { toolSearchCondition: ToolSearchCondition | null };

interface Option {
  value: string;
  label: string;
}

const tip_type_options: Option[] = [
  { value: 'ball', label: 'ボール' },
  { value: 'radius', label: 'ラジアス' },
  { value: 'square', label: 'スクエア' },
];

const ToolSearchComponent: React.FC = (props: Props) => {
  console.debug('@Tools:');

  const [toolSearchCondition, setToolSearchCondition] = React.useState<ToolSearchCondition>({} as ToolSearchCondition);

  const places = useLoaderData() as Array<Place>;

  // input handlers
  const handlePlaceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    toolSearchCondition.place_id = event.target.value;
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };
  const handleTipTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    toolSearchCondition.tip_type = event.target.value;
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };
  const handleRChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toolSearchCondition.R = parseFloat(event.target.value);
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };
  const handleDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toolSearchCondition.D = parseFloat(event.target.value);
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };
  const handleDsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toolSearchCondition.Ds = parseFloat(event.target.value);
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };
  const handleLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toolSearchCondition.L = parseFloat(event.target.value);
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };
  const handleL1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    toolSearchCondition.L1 = parseFloat(event.target.value);
    setToolSearchCondition(toolSearchCondition);
    console.debug('@ToolSearchCondition:'+JSON.stringify(toolSearchCondition))
  };

  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <>
      <div>
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `calc(60% - ${drawerBleeding}px)`,
              overflow: 'visible',
            },
          }}
        />
        <Box sx={{ flexGrow: 1 }} padding={1}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography variant="h4" gutterBottom>工具一覧</Typography>
            </Grid>
            <Grid xs={6}>
              <Button variant="contained" onClick={toggleDrawer(true)}>検索条件</Button>
            </Grid>
          </Grid>
        </Box>
        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Stack spacing={1}>
              <Form method="post">
                <Item>拠点・在庫場所 :
                  <select name="place_id" value={toolSearchCondition.place_id} onChange={handlePlaceChange}>
                    <option key="-" value="">拠点・在庫場所選択</option>
                    {  places?.map(place => (
                       <option key={place?.id} value={place?.id}>{place.name}</option>
                    ))
                    }
                  </select>
                </Item>
                <Item>先端R : 
                  <input onChange={handleRChange}
                    aria-label="Search contacts"
                    placeholder="<R>"
                    type="search"
                    name="R"
                  />
                </Item>
                <Item>先端径 :
                  <input onChange={handleDChange}
                    aria-label="Search contacts"
                    placeholder="<D>"
                    type="search"
                    name="D"
                  />
                </Item>
                <Item>シャンク径 :
                  <input onChange={handleDsChange}
                    aria-label="Search contacts"
                    placeholder="<Ds>"
                    type="search"
                    name="Ds"
                  />
                </Item>
                <Item>有効長 :
                  <input onChange={handleL1Change}
                    aria-label="Search contacts"
                    placeholder="<L1>"
                    type="search"
                    name="L1"
                  />
                </Item>
                <Item>工具種 :
                  <select value={toolSearchCondition.tip_type} onChange={handleTipTypeChange}>
                    {tip_type_options.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </Item>
                <Item>
                  <Button type="submit" onClick={toggleDrawer(false)}>検索</Button>
                </Item>
              </Form>
            </Stack>
          </Box>
        </SwipeableDrawer>
      </div>

      <Outlet context={{toolSearchCondition} satisfies ToolResultContextType} />
    </>
  );
};

export default ToolSearchComponent;
