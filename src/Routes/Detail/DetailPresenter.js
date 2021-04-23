import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: absolute;
    padding: 10px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.7;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    vertical-align: center;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    margin-right: 20px;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
`;

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 20px;
`;

const DescriptionContainer = styled.div`
    margin: 20px 0;
`;

const Description = styled.span``;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    font-size: 12px;
    font-style: "Bookman Old Style";
    opacity: 0.7;
    line-height: 2;
    width: 50%;
`;

const Collection = styled.div``;

const DetailPresenter = ({ result, loading, error }) =>
    loading ? (
      <>
        <Helmet>
          <title>Loading | Movie WebApp</title>
        </Helmet>
        <Loader />
      </>
    ) : (
        <Container>
          <Helmet>
            <title>
              {result.original_title ? result.original_title : result.original_name}{" "}
              | Movie WebApp
            </title>
          </Helmet>
          <Backdrop
            bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
          />
          <Content>
            <Cover
              bgImage={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                  : require("../../assets/NoImage.png")
              }
            />
            <Data>
              <Title>
                {result.original_title
                  ? result.original_title
                  : result.original_name}
              </Title>
              <DescriptionContainer>
                <Description>
                  {result.release_date
                    ? result.release_date.split("-", 1)
                    : result.first_air_date.split("-", 1)}
                </Description>
                <Divider>•</Divider>
                <Description>
                  {result.runtime ? result.runtime : result.episode_run_time[0]} min
                </Description>
                <Divider>•</Divider>
                <Description>
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                  )}
                </Description>
              </DescriptionContainer>
              <Overview>{result.overview}</Overview>
            </Data>
          </Content>
        </Container>
);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;