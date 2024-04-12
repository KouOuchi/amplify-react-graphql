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
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { Place, Tool } from '../../API';

import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

export const action:ActionFunction = async ({ request, params }) => {
  return redirect(".");
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
      <Form method="post" onSubmit={(event) => {
        console.debug('@ToolAddCondition:'+JSON.stringify(toolAddCondition))
        if(!toolAddCondition.place_id) {
          window.alert('拠点・在庫場所を選択してください');
          event.preventDefault();
        }
      }}>
        <select value={toolAddCondition.place_id} onChange={handlePlaceChange}>
          <option key="-" value="">拠点・在庫場所選択</option>
          {  places?.map(place => (
             <option key={place?.id} value={place?.id}>{place.name}</option>
          ))
          }
        </select>

        <Box sx={{ width: 250 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              本数
            </Grid>
            <Grid item xs>
              <Slider
                value={typeof value === 'number' ? value : 1}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
              />
            </Grid>
            <Grid item>
              <Input
                value={value}
                size="small"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 100,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </Grid>
          </Grid>
        </Box>

        <br/>


        <br/>

        ロット番号
        <TextField id="standard-basic"  variant="standard" onChange={(e)=> {
          toolAddCondition.lot = e.target.value;
          setToolAddCondition(toolAddCondition);
          console.debug('@ToolAddCondition:'+JSON.stringify(toolAddCondition));
        }} value={toolAddCondition.lot} />
        <br/>
        <Button variant="outlined" onClick={handleOpen} ><QrCodeScannerRoundedIcon />QRコード取得</Button>
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
        <br/>
        型番
        <TextField id="standard-basic" variant="standard" />

        <br/>
        <Button type="submit" variant="contained">工具登録</Button>

      </Form>
    </div>
  );
};

export default ToolAddComponent;
