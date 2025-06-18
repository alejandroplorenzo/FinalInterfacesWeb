import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import CharacterDetail from "../../components/CharacterDetail.tsx";

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
    GET: async (req: Request, ctx: FreshContext<unknown, APIresponse>) => {
        const {id} = ctx.params;
        const response = await Axios.get(`https://hp-api.onrender.com/api/character/${id}`);
        const url = new URL(req.url);
        const idUrl = url.searchParams.get("id");
        if(idUrl){
            return new Response ("", {
                status: 307,
                headers: {
                Location: `character/${id}`,
                }
            })
        }
        return ctx.render({results: response.data})
    }
}

const Page = (props: PageProps<APIresponse>) => {
    const data = props.data;
    return(
        <div>
            {data.results.map((ch)=> (
                <div>
                    <CharacterDetail id={ch.id} house={ch.house} name={ch.name} alive={ch.alive} image={ch.image}/>
                </div>
            ))}
        </div>
    )
}

export default Page;
