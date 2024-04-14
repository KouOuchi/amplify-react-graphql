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
import { CaptureLotComponent } from './capture_lot_component';
import { getCurrentUser } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { Place, Tool, CreateToolInput } from '../../API';

import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const action:ActionFunction = async ({ request, params }) => {

  console.debug('@create new action #1');

  const formData = await request.formData();

  let created_tool:Tool | null = null;
  const place_id = '';

  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);

    const client = generateClient();

    const toolDetails = {
      D: 1,
      H: 1,
      R: 1,
      Ds: 1,
      L1: 1,
      TipR: 1,
      part_name: 'My first places!',
      part_code: 'My first places!',
      count: 1,
      life_hour_spec: 10,
      life_hour_current: 10,
      comment: 'a',
      //   userID: userId,
      placeToolsId: formData.get("place_id") as string,
    };

    const result = await client.graphql({
      query: mutations.createTool,
      variables: { input: toolDetails }
    });
    console.debug('@API creation done:'+result);
    created_tool = result.data.createTool as Tool;

  } catch (err) {
    console.debug('@API creation error.');
    console.log(err);
  }

  console.debug('@create new action #2:'+`tool/${created_tool?.id}/edit`);
  return redirect(`../tool/${created_tool?.id}/edit`);

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

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export interface ToolAddCondition {
  place_id: string;
  lot: string;
  part_codeD: string;
}

const Input = styled(MuiInput)`
  width: 42px;
`;

const ToolAddComponent: React.FC = () => {
  console.debug('@Tool Add:');
  const [toolAddCondition, setToolAddCondition] = React.useState<ToolAddCondition>({} as ToolAddCondition);

  const places = useLoaderData() as Array<Place>;

  // input handlers
  const handlePlaceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    toolAddCondition.place_id = event.target.value;
    setToolAddCondition(toolAddCondition);
    console.debug('@ToolAddCondition:'+JSON.stringify(toolAddCondition))
  };

  const [value, setValue] = React.useState(1);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? 1 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(1);
    } else if (value > 100) {
      setValue(100);
    }
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseCaptureLot = (e:string) => {
    toolAddCondition.lot = e;
    setToolAddCondition(toolAddCondition);
    console.debug('@ToolAddCondition:'+JSON.stringify(toolAddCondition));
    setOpen(false)
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} padding={1}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h4" gutterBottom>工具追加</Typography>
          </Grid>
          <Grid xs={6}>
            <Button variant="outlined" onClick={handleOpen} ><QrCodeScannerRoundedIcon />QRコード</Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Form method="post" onSubmit={(event) => {
          console.debug('@ToolAddCondition:'+JSON.stringify(toolAddCondition))
          if(!toolAddCondition.place_id) {
            window.alert('拠点・在庫場所を選択してください');
            event.preventDefault();
          }
        }}>
          <Stack spacing={1}>
            <Item>拠点・在庫場所 : 
              <select name="place_id" value={toolAddCondition.place_id} onChange={handlePlaceChange}>
                <option key="-" value="">拠点・在庫場所選択</option>
                {  places?.map(place => (
                   <option key={place?.id} value={place?.id}>{place.name}</option>
                ))
                }
              </select>
            </Item>
            <Item>ロット番号 : 
              <TextField id="standard-basic"  variant="standard" onChange={(e)=> {
                toolAddCondition.lot = e.target.value;
                setToolAddCondition(toolAddCondition);
                console.debug('@ToolAddCondition:'+JSON.stringify(toolAddCondition));
              }} value={toolAddCondition.lot} />
              <br/>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <CaptureLotComponent onClose={handleCloseCaptureLot} />
                </Box>
              </Modal>
            </Item>
            <Item>型番 :
              <TextField id="standard-basic" variant="standard" />
            </Item>
            <Item>
              <Button type="submit" variant="contained">工具登録</Button>
            </Item>
          </Stack>
        </Form>
      </Box>
    </div>
  );
};

export default ToolAddComponent;
