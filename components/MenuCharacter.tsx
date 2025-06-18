import { FunctionComponent } from "preact";

type CharacterProps = {
  id: string;
  house: string;
  name: string;
  alive: boolean;
  image: string;
}

const MenuCharacter: FunctionComponent<CharacterProps> = (props) => {
    const {name, image} = props;

    return(
        <div>
            <img src={image} alt={name} class="card img"/>
            <span class="name">{name}</span>
        </div>
    )
}

export default MenuCharacter;
  
