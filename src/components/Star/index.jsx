import { Container } from  "./styles";

import { VscStarFull, VscStarEmpty } from "react-icons/vsc";

export function Star() {
    return (
        <Container>
            <VscStarFull size={20}/>
            <VscStarFull size={20}/>
            <VscStarFull size={20}/>
            <VscStarFull size={20}/>
            <VscStarEmpty size={20}/>
        </Container>
    )
}
