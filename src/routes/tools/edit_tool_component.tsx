import React from 'react';
import { 
  Form,
  redirect,
  ActionFunction,
  LoaderFunction,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { generateClient } from 'aws-amplify/api';
import { getTool } from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { Tool } from '../../API';

export const action:ActionFunction = async ({ request, params }) => {
  console.debug('@editAction:');

  const formData = await request.formData();

  try {
    const client = generateClient();
    const updateResult = await client.graphql({
      query: mutations.updateTool,
      variables: {
        input: {
          id: params.toolId as string,
          part_name: formData.get("part_name") as string,
          part_code: formData.get("part_code") as string,
          R: parseFloat(formData.get("R") as string),
          D: parseFloat(formData.get("D") as string),
          Ds: parseFloat(formData.get("Ds") as string),
          H: parseFloat(formData.get("H") as string),
          L1: parseFloat(formData.get("L1") as string),
          comment: formData.get("comment") as string,
        }
      }
    });
  } catch (err) {
    console.error('error updating Place', err);
  }
  return redirect('..');
};

export const loader:LoaderFunction = async ({params}) => {
  const toolId = params.toolId as string;
  console.debug('@Contact:'+JSON.stringify(toolId));

  if(!toolId) {
    throw new Error("tool id not defined.");
  }

  const fetchTool = async () => {
    try {
      const client = generateClient();
      const toolData = await client.graphql({ 
        query: getTool,
        variables: {
          id: toolId,
        }
      });
      return toolData.data.getTool as Tool;
    } catch (err) {
      console.error('error fetching Place', err);
    }
  };

  return fetchTool();
};

const EditToolComponent: React.FC = () => {
  const navigate = useNavigate();

  const tool = useLoaderData() as Tool|null;
  const place_name = tool?.place?.name as string;
  const part_name = tool?.part_name as string;
  const part_code = tool?.part_code as string;
  const count = tool?.count as number;
  const life_hour_spec = tool?.life_hour_spec as number;
  const life_hour_current = tool?.life_hour_current as number;
  const comment = tool?.comment as string;

  const D = tool?.D as number;
  const H = tool?.H as number;
  const R = tool?.R as number;
  const Ds = tool?.Ds as number;
  const L1 = tool?.L1 as number;
  const TipR = tool?.TipR as number;
  
  return (
    <Form method="post" id="contact-form">
      <p>
        <span>拠点・在庫場所</span>
        <input
          placeholder="< 拠点・在庫場所 >"
          aria-label="name"
          type="text"
          readOnly={true}
          defaultValue={place_name}
        />
      </p>
      <p>
        <span>品名</span>
        <input
          aria-label="part_name"
          type="text"
          name="part_name"
          defaultValue={part_name}
        />
      </p>
      <p>
        <span>品目コード</span>
        <input
          aria-label="part_code"
          type="text"
          name="part_code"
          defaultValue={part_code}
        />
      </p>
      <p>
        <span>R</span>
        <input
          aria-label="R"
          type="text"
          name="R"
          defaultValue={R}
        />
      </p>
      <p>
        <span>D</span>
        <input
          aria-label="D"
          type="text"
          name="D"
          defaultValue={D}
        />
      </p>
      <p>
        <span>Ds</span>
        <input
          aria-label="Ds"
          type="text"
          name="Ds"
          defaultValue={Ds}
        />
      </p>
      <p>
        <span>H</span>
        <input
          aria-label="H"
          type="text"
          name="H"
          defaultValue={H}
        />
      </p>
      <p>
        <span>L1</span>
        <input
          aria-label="L1"
          type="text"
          name="L1"
          defaultValue={L1}
        />
      </p>
      <p>
        <span>コメント</span>
        <textarea
          placeholder="< コメント >"
          aria-label="comment"
          name="comment"
          defaultValue={comment}
          rows={6}
        />
      </p>
      <p>
        <button type="submit">Save</button>
        <button type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
};

export default EditToolComponent;
