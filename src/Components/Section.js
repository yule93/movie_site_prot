import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;
const Title = styled.span`
    font-size: 16px;
    font-weight: 500;
`;
const Grid = styled.div`
    margin-top: 25px;
`;

const Section = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: React.propTypes.oneOfTypes([
        propTypes.arrayOf(propTypes.node),
        propTypes.node
    ])
}

export default Section;