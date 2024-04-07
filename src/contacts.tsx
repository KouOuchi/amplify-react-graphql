import { 
  useQuery,
  useQueryClient,
} from 'react-query';
import { matchSorter } from "match-sorter";

export interface TContact {
  id:number;
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache:TContact[] = 
  [
    {
      id:1,
      first: "Your",
      last: "Name",
      avatar: "https://placekitten.com/g/200/200",
      twitter: "your_handle",
      notes: "Some notes",
      favorite: true
    },
    {
      id:2,
      first: "Kou",
      last: "Ouchi",
      avatar: "https://placekitten.com/g/200/200",
      twitter: "kkk",
      notes: "vvv",
      favorite: true
    },
    {
      id:3,
      first: "Keiko",
      last: "Ouchi",
      avatar: "https://placekitten.com/g/200/200",
      twitter: "lll",
      notes: "mmm",
      favorite: false
    }
  ];

export async function getContacts(query:string): Promise<TContact[]> {
  console.debug('@query:'+query);
  if(query !== "") {
    //    const contact = fakeCache.find((contact) => `${contact.id}` === query);

    //    if(contact) {
    //      return [contact];
    //    } else {
    //      return [undefined];
    //    }
    return fakeCache;
  } else {
    return fakeCache;
  }
}

export async function createContact(): Promise<TContact> {
  //  await fakeNetwork();
  const newid = fakeCache.length + 1;
  const contact:TContact = {
    id: newid,
    first: "new",
    last: "new",
    avatar: "new",
    twitter: "",
    notes: "",
    favorite: false
    //    createdAt: Date.now()
  };

  fakeCache.push(contact);
  return contact;
}

export async function getContact(myid: string): Promise<TContact> {
  console.debug("@getContact(id):${myid}");
  //  await fakeNetwork(`contact:${id}`);

  let contact = fakeCache.find((c) => `${c.id}` === myid);

  if (contact) {
    return contact;
  } else {
    throw new Error("id undef error.");
  }
}

export async function UpdateContact(contact:TContact): Promise<TContact> {
  let contacts = await getContacts('');

//  if(typeof id === "undefined") {
//    throw new Error("No contact found for undefined.");
//  } else if(typeof id === "string") {
//    const n:number = Number(id);

  let updated = contacts.find((c:TContact) => c.id === contact.id) as TContact;
//  console.debug('@updateContact@1:'+JSON.stringify(updated));
  Object.assign(updated, contact);
  //  console.debug('@updateContact@2:'+JSON.stringify(updated));

  //   await set(contacts);

  console.debug('@UpdateContact OK. invalidating...');
  const queryClient = useQueryClient();
  queryClient.invalidateQueries('get_all');

  return updated;
}

export async function deleteContact(id:string) {

  const contact = await getContact(id);
  let index = fakeCache.indexOf(contact);

  if (index !== -1) {
    fakeCache.splice(index, 1); 
    return true;
  } else {
    return false;
  }
}


