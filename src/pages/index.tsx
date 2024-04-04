import BallotBox from '@components/BallotBox';
import { Container, Wrapper } from '@components/Templates';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
    return (
        <Container>
            <Wrapper>
                <BallotBox/>             
            </Wrapper>
        </Container>
    );
}
