import React from "react";
import {Link} from "react-router-dom";
import propTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 180px;
    background-size: cover;
    background-radius: 3px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    bottom: 5px;
    right: 5px;
    postion: absolute;
    opacity: 0;
`;

const Title = styled.span`
    display: block;
    margint-bottom: 3px;
`;

const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;

const ImageContainer = styled.div`
    margint-bottom: 5px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;

const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => (
    <Link to = {isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl = {imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/NoImage.png").default} />
                <Rating>
                    <span role = "img" aria-label="rating">
                        ⭐
                    </span>
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>
                <span>
                    {title.length > 15 ? `${title.substring(0, 14)}...` : title}
                </span>
            </Title>
            <br/>
            <Year>
                <span>
                    {year}
                </span>
            </Year>
        </Container>
    </Link>
);

Poster.propTypes = {
    id: propTypes.number.isRequired,
    imageUrl: propTypes.string,
    title: propTypes.string.isRequired,
    rating: propTypes.number,
    year: propTypes.string,
    isMovie: propTypes.bool
};

export default Poster;