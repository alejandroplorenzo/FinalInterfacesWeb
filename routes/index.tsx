import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import MenuCharacter from "../components/MenuCharacter.tsx";
type character = {
  id: string;
  house: string;
  name: string;
  alive: boolean;
  image: string;
}

type APIresponse = {
  results: character[];
}

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, APIresponse>)=> {
    const apiUrl = "https://hp-api.onrender.com/api/characters";
    const response = await Axios.get(apiUrl);
    const charactersresponse = response.data;
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if(id){
      return new Response ("", {
        status: 307,
        headers: {
          Location: `character/${id}`,
        }
      }
      )
    }
    return ctx.render({results: charactersresponse});
  }
}

const Page = (props: PageProps<APIresponse>) => {
  const characters = props.data;

  return(
      <div class="grid">
        {characters.results.map((ch)=> (
            <div class="card">
              <a href={`/character/${ch.id}`} key={ch.id}>
                <MenuCharacter id={ch.id} house={ch.house} name={ch.name} alive={ch.alive} image={ch.image}/>
              </a>
              <button type="button" class="star">★</button>
            </div>

        ))}
      </div>

  )
}

export default Page;
