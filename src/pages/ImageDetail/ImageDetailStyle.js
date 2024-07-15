import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100dvw",
  height: "100dvh",
  backgroundColor: "#000000",
  overflowY: "scroll",
  msOverflowStyle: "none" /* Internet Explorer */,
  scrollbarWidth: "none" /* Firefox */,
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const IntroContainer = styled.div`
  width: 100%;
`;
