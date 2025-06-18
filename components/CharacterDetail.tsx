import { FunctionComponent } from "preact";

type CharacterProps = {
  id: string;
  house: string;
  name: string;
  alive: boolean;
  image: string;
}

const CharacterDetail: FunctionComponent<CharacterProps> = (props) => {
    const {name, image, house, alive} = props;
    return(
        <div class="detail">
            <img src={image} alt={name} class="card img"/>
            <span class="name">{name}</span>
            <span> Casa: {house} </span>
            {alive === true && <span>Vivo</span>}
            {alive === false && <span>Muerto</span>}
            <a href="/">Volver</a>
        </div>
    )
}

export default CharacterDetail;