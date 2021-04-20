import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
loading ? null : (
    <Container>
        {nowPlaying && nowPlaying.length > 0 && (
            <Section title = "Now Playing" >
                {nowPlaying.map(movie =>
                    <Poster
                        key={movie.id}
                        id = {movie.id}
                        imageUrl = {movie.poster_path}
                        title = {movie.original_title}
                        rating = {movie.vote_average}
                        isMovie={true}
                        year = {movie.release_date && movie.release_date.split("-", 1)}
                    />
                )}
            </Section>
        )}
        {upcoming && upcoming.length > 0 && (
            <Section title = "Upcoming Movies" >
                {upcoming.map(movie =>
                    <Poster
                        key={movie.id}
                        id = {movie.id}
                        imageUrl = {movie.poster_path}
                        title = {movie.original_title}
                        rating = {movie.vote_average}
                        isMovie={true}
                        year = {movie.release_date && movie.release_date.split("-", 1)}
                    />
                )}
            </Section>  // year에서 release date를 한 번 더 체크해주는 이유는 undefined를 거르기 위해서
        )}
        {popular && popular.length > 0 && (
            <Section title = "Popular Movies" >
                {popular.map(movie =>
                    <Poster
                        key={movie.id}
                        id = {movie.id}
                        imageUrl = {movie.poster_path}
                        title = {movie.original_title}
                        rating = {movie.vote_average}
                        isMovie={true}
                        year = {movie.release_date && movie.release_date.split("-", 1)}
                    />
                )}
            </Section>
        )}
        {error && <Message color = "#e74c3c" text = {error} />}
    </Container>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;