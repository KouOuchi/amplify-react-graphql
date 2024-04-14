import React from 'react';
import { 
  Form,
  redirect,
  ActionFunction,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import { Place } from '../../API';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const action:ActionFunction = async ({ request, params }) => {
  console.debug('@editAction:');

  const formData = await request.formData();

  try {
    const client = generateClient();
    const updateResult = await client.graphql({
      query: mutations.updatePlace,
      variables: {
        input: {
          id: params.contactId as string,
          name: formData.get("name") as string,
          comment: formData.get("comment") as string,
        }
      }
    });
  } catch (err) {
    console.error('error updating Place', err);
  }
  return redirect('..');
};

const EditPlaceComponent: React.FC = () => {
  const navigate = useNavigate();

  const place = useLoaderData() as Place|null;
  const place_name = place?.name as string;
  const place_comment = place?.comment as string;
  
  return (
    <Card sx={{ minWidth: 375 }}>
      <CardContent>
        <Form method="post" id="contact-form">
          <p>
            <span>拠点・在庫場所</span>
            <input
              placeholder="< 拠点・在庫場所 >"
              aria-label="name"
              type="text"
              name="name"
              defaultValue={place_name}
            />
          </p>
          <label>
            <span>コメント</span>
            <textarea
              placeholder="< コメント >"
              aria-label="comment"
              name="comment"
              defaultValue={place_comment}
              rows={6}
    />
          </label>
          <p>
          </p>
          <CardActions>
            <Button type="submit" variant="contained">保存</Button>
            <Button variant="contained"
              onClick={() => {
                navigate(-1);
              }}
            >
              キャンセル
            </Button>
          </CardActions>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EditPlaceComponent;
