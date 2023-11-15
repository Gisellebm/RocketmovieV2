import { Container } from  "./styles";

import { VscStarFull, VscStarEmpty } from "react-icons/vsc";

export function Star() {
    return (
        <Container>
            <VscStarFull />
            <VscStarFull />
            <VscStarFull />
            <VscStarFull />
            <VscStarEmpty />
        </Container>
    )
}
