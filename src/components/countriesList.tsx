import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Flag,
    CountryName,
    FlagContainer,
    Article,
    Frame,
    BoldText,
    SimpleText
} from '../stylesComponents/allCountries';

type Props = {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string;  
}

export const AllCountries: React.FC<Props> = ({
    flag,
    name,
    population,
    region,
    capital 
    }) => {
    return (
        <Link to={`/${name}`}>
        <Container>
            <FlagContainer>
                <Flag src={flag} alt={`${name}'s flag`} className="Flag" />
            </FlagContainer>
            <Article>
                <CountryName>
                    {name}
                </CountryName>
                <Frame>
                    <BoldText>
                        Population: 
                    </BoldText>
                    <SimpleText>
                        {population}
                    </SimpleText>
                </Frame>
                <Frame>
                    <BoldText>
                        Region: 
                    </BoldText>
                    <SimpleText>
                        {region}
                    </SimpleText>
                </Frame>
                <Frame>
                    <BoldText>
                        Capital: 
                    </BoldText>
                    <SimpleText>
                        {capital}
                    </SimpleText>
                </Frame>
            </Article>
        </Container>
        </Link>
    )
}