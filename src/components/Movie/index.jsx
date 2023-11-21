import PropTypes from 'prop-types';
import { Container } from "./styles";
import { Star } from "../Star";
import { Tag } from "../Tag";

export function Movie( { data, ...rest }) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            <Star rating={data.rating}/>

            <p>
                {data.description}
            </p>

            {
                data.tags && 
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
                
            }
        </Container>
    )
}

Movie.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string
            })
        ),
        description: PropTypes.string,
        rating: PropTypes.number
    }),
};