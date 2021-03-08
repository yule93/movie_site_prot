import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";

const Container = styled.div``;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
loading ? null : (
    <Container>
        {nowPlaying && nowPlaying.length > 0 && (
            <Section title = "Now Playing" >
                {nowPlaying.map(movie => movie.title)}
            </Section>
        )}
        {popular && popular.length > 0 && (
            <Section title = "Popular Movies" >
                {popular.map(movie => movie.title)}
            </Section>
        )}
        {upcoming && upcoming.length > 0 && (
            <Section title = "Upcoming" >
                {upcoming.map(movie => movie.title)}
            </Section>
        )}
    </Container>
);

HomePresenter.PropTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;