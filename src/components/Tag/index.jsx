import { Container } from "./styles";
import PropTypes from 'prop-types'; 

export function Tag({ title, isDetails = false, ...rest }) {
    return (
        <Container isDetails={isDetails} {...rest}>
            {title}
        </Container>
    )
}

Tag.propTypes = {
    title: PropTypes.string.isRequired,
    isDetails: PropTypes.bool
}