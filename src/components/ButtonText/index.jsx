import { Container } from './styles';
import PropTypes from 'prop-types';

export function ButtonText({ icon: Icon, title, ...rest }) {
    return (
        <Container {...rest}>

            {Icon && <Icon />}
            {title}
        </Container>
    )
}

ButtonText.propTypes = {
    icon: PropTypes.elementType,
    title: PropTypes.string.isRequired
}