import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Head,
  List,
  NavBar,
  Seperator,
  StyledNavLink,
  HomeStyledNavLink,
  Buttons,
} from "./Header.js";
import styled from "@emotion/styled";
import { userContext } from "../../App.jsx";
import { isMobile } from "react-device-detect";

const StyledScrollButton = styled.div((props) => ({
  width: `23px`,
  height: `23px`,
  color: `white`,
  paddingRight: `0.75dvw`,
  visibility: props.display,
}));

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};
const ScrollButton = ({ display }) => {
  return (
    <>
      <StyledScrollButton onClick={scrollToBottom} display={display}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.53375 11.0374C4.53375 7.3155 7.55098 4.29828 11.2729 4.29828C14.9948 4.29828 18.0121 7.3155 18.0121 11.0374C18.0121 12.8528 17.2943 14.5005 16.1271 15.7122C16.0939 15.7377 16.0619 15.7657 16.0315 15.796C16.0011 15.8264 15.9732 15.8584 15.9477 15.8916C14.736 17.0588 13.0883 17.7766 11.2729 17.7766C7.55098 17.7766 4.53375 14.7594 4.53375 11.0374ZM16.6813 17.8073C15.199 18.993 13.3187 19.7021 11.2729 19.7021C6.48757 19.7021 2.60828 15.8228 2.60828 11.0374C2.60828 6.25209 6.48757 2.3728 11.2729 2.3728C16.0583 2.3728 19.9375 6.25209 19.9375 11.0374C19.9375 13.0833 19.2285 14.9635 18.0428 16.4458L21.5809 19.984C21.9569 20.3599 21.9569 20.9695 21.5809 21.3455C21.205 21.7214 20.5954 21.7214 20.2194 21.3455L16.6813 17.8073Z"
            fill="lightgray"
          />
        </svg>
      </StyledScrollButton>
    </>
  );
};

const Header = () => {
  const [user, setUser] = useContext(userContext);
  const [showScrollButton, setShowScrollButton] = useState("hidden");
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  useEffect(() => {
    if (isLandingPage) {
      setShowScrollButton("visible");
    } else {
      setShowScrollButton("hidden");
    }
  }, [location]);

  return (
    <Head>
      <NavBar>
        <HomeStyledNavLink to={"/"} margin={"2dvw"}>
          GraduART
        </HomeStyledNavLink>
        {isMobile ? (
          <></>
        ) : (
          <List>
            <StyledNavLink to={"/Oriental Painting"} activeclassname={"active"}>
              동양화과
            </StyledNavLink>
            <StyledNavLink to={"/Western Painting"} activeclassname={"active"}>
              서양화과
            </StyledNavLink>
            <StyledNavLink to={"/Sculpture"} activeclassname={"active"}>
              조소과
            </StyledNavLink>
            <StyledNavLink to={"/Craft"} activeclassname={"active"}>
              공예과
            </StyledNavLink>
            <StyledNavLink to={"/Design"} activeclassname={"active"}>
              디자인과
            </StyledNavLink>
            <StyledNavLink to={"/MediaArts"} activeclassname={"active"}>
              영상매체예술
            </StyledNavLink>
          </List>
        )}
        <Seperator></Seperator>
        <Buttons>
          <ScrollButton display={showScrollButton}></ScrollButton>
          {user ? (
            <>
              <StyledNavLink to={"/Cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_149_87863)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.85702 0.447266C1.32532 0.447266 0.894287 0.878298 0.894287 1.41C0.894287 1.94171 1.32532 2.37274 1.85702 2.37274H4.91883L5.71948 6.37299C5.72374 6.40038 5.72917 6.4274 5.73569 6.45398L7.34382 14.4886C7.47601 15.1531 7.83779 15.7509 8.36559 16.1758C8.89098 16.5987 9.54773 16.8244 10.2219 16.8138H19.5631C20.2372 16.8244 20.894 16.5987 21.4194 16.1758C21.9474 15.7507 22.3091 15.1535 22.4412 14.4886L22.4426 14.4814L23.9829 6.40404C24.0367 6.12219 23.9619 5.83107 23.779 5.61C23.5961 5.38893 23.3242 5.26095 23.0372 5.26095H7.46057L6.65199 1.22106C6.56193 0.771116 6.16684 0.447266 5.70797 0.447266H1.85702ZM7.84595 7.18643H21.8736L20.552 14.1166C20.5074 14.337 20.3872 14.5349 20.212 14.6759C20.036 14.8176 19.8157 14.8928 19.5898 14.8885L19.5714 14.8883H10.2136L10.1951 14.8885C9.96923 14.8928 9.749 14.8176 9.57299 14.6759C9.39698 14.5342 9.27642 14.3351 9.2324 14.1135L7.84595 7.18643Z"
                      fill="lightgray"
                    />
                    <path
                      d="M7.63345 20.6647C7.63345 19.6013 8.49551 18.7393 9.55892 18.7393C10.6223 18.7393 11.4844 19.6013 11.4844 20.6647C11.4844 21.7282 10.6223 22.5902 9.55892 22.5902C8.49551 22.5902 7.63345 21.7282 7.63345 20.6647Z"
                      fill="lightgray"
                    />
                    <path
                      d="M18.2236 20.6647C18.2236 19.6013 19.0856 18.7393 20.149 18.7393C21.2124 18.7393 22.0745 19.6013 22.0745 20.6647C22.0745 21.7282 21.2124 22.5902 20.149 22.5902C19.0856 22.5902 18.2236 21.7282 18.2236 20.6647Z"
                      fill="lightgray"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_149_87863">
                      <rect
                        width="23.1057"
                        height="23.1057"
                        fill="lightgray"
                        transform="translate(0.894287 0.447266)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </StyledNavLink>
              <StyledNavLink to={"/purchased"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.3414 2.3728C9.68287 2.3728 7.52771 4.52796 7.52771 7.18649C7.52771 9.84501 9.68287 12.0002 12.3414 12.0002C14.9999 12.0002 17.1551 9.84501 17.1551 7.18649C17.1551 4.52796 14.9999 2.3728 12.3414 2.3728ZM9.45318 7.18649C9.45318 5.59137 10.7463 4.29828 12.3414 4.29828C13.9365 4.29828 15.2296 5.59137 15.2296 7.18649C15.2296 8.7816 13.9365 10.0747 12.3414 10.0747C10.7463 10.0747 9.45318 8.7816 9.45318 7.18649Z"
                    fill="lightgray"
                  />
                  <path
                    d="M8.49044 13.9256C7.21377 13.9256 5.98939 14.4328 5.08665 15.3355C4.18391 16.2383 3.67676 17.4627 3.67676 18.7393V20.6648C3.67676 21.1965 4.10779 21.6275 4.6395 21.6275C5.1712 21.6275 5.60223 21.1965 5.60223 20.6648V18.7393C5.60223 17.9733 5.90652 17.2387 6.44817 16.6971C6.98981 16.1554 7.72444 15.8511 8.49044 15.8511H16.1923C16.9583 15.8511 17.693 16.1554 18.2346 16.6971C18.7763 17.2387 19.0806 17.9733 19.0806 18.7393V20.6648C19.0806 21.1965 19.5116 21.6275 20.0433 21.6275C20.575 21.6275 21.006 21.1965 21.006 20.6648V18.7393C21.006 17.4627 20.4989 16.2383 19.5961 15.3355C18.6934 14.4328 17.469 13.9256 16.1923 13.9256H8.49044Z"
                    fill="lightgray"
                  />
                </svg>
              </StyledNavLink>
            </>
          ) : (
            <>
              <StyledNavLink
                to={"/login"}
                state={{ redirectMessage: "로그인이 필요한 서비스입니다" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_149_87863)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.85702 0.447266C1.32532 0.447266 0.894287 0.878298 0.894287 1.41C0.894287 1.94171 1.32532 2.37274 1.85702 2.37274H4.91883L5.71948 6.37299C5.72374 6.40038 5.72917 6.4274 5.73569 6.45398L7.34382 14.4886C7.47601 15.1531 7.83779 15.7509 8.36559 16.1758C8.89098 16.5987 9.54773 16.8244 10.2219 16.8138H19.5631C20.2372 16.8244 20.894 16.5987 21.4194 16.1758C21.9474 15.7507 22.3091 15.1535 22.4412 14.4886L22.4426 14.4814L23.9829 6.40404C24.0367 6.12219 23.9619 5.83107 23.779 5.61C23.5961 5.38893 23.3242 5.26095 23.0372 5.26095H7.46057L6.65199 1.22106C6.56193 0.771116 6.16684 0.447266 5.70797 0.447266H1.85702ZM7.84595 7.18643H21.8736L20.552 14.1166C20.5074 14.337 20.3872 14.5349 20.212 14.6759C20.036 14.8176 19.8157 14.8928 19.5898 14.8885L19.5714 14.8883H10.2136L10.1951 14.8885C9.96923 14.8928 9.749 14.8176 9.57299 14.6759C9.39698 14.5342 9.27642 14.3351 9.2324 14.1135L7.84595 7.18643Z"
                      fill="lightgray"
                    />
                    <path
                      d="M7.63345 20.6647C7.63345 19.6013 8.49551 18.7393 9.55892 18.7393C10.6223 18.7393 11.4844 19.6013 11.4844 20.6647C11.4844 21.7282 10.6223 22.5902 9.55892 22.5902C8.49551 22.5902 7.63345 21.7282 7.63345 20.6647Z"
                      fill="lightgray"
                    />
                    <path
                      d="M18.2236 20.6647C18.2236 19.6013 19.0856 18.7393 20.149 18.7393C21.2124 18.7393 22.0745 19.6013 22.0745 20.6647C22.0745 21.7282 21.2124 22.5902 20.149 22.5902C19.0856 22.5902 18.2236 21.7282 18.2236 20.6647Z"
                      fill="lightgray"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_149_87863">
                      <rect
                        width="23.1057"
                        height="23.1057"
                        fill="lightgray"
                        transform="translate(0.894287 0.447266)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </StyledNavLink>
              <StyledNavLink
                to={"/login"}
                state={{ redirectMessage: "로그인이 필요한 서비스입니다" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.3414 2.3728C9.68287 2.3728 7.52771 4.52796 7.52771 7.18649C7.52771 9.84501 9.68287 12.0002 12.3414 12.0002C14.9999 12.0002 17.1551 9.84501 17.1551 7.18649C17.1551 4.52796 14.9999 2.3728 12.3414 2.3728ZM9.45318 7.18649C9.45318 5.59137 10.7463 4.29828 12.3414 4.29828C13.9365 4.29828 15.2296 5.59137 15.2296 7.18649C15.2296 8.7816 13.9365 10.0747 12.3414 10.0747C10.7463 10.0747 9.45318 8.7816 9.45318 7.18649Z"
                    fill="lightgray"
                  />
                  <path
                    d="M8.49044 13.9256C7.21377 13.9256 5.98939 14.4328 5.08665 15.3355C4.18391 16.2383 3.67676 17.4627 3.67676 18.7393V20.6648C3.67676 21.1965 4.10779 21.6275 4.6395 21.6275C5.1712 21.6275 5.60223 21.1965 5.60223 20.6648V18.7393C5.60223 17.9733 5.90652 17.2387 6.44817 16.6971C6.98981 16.1554 7.72444 15.8511 8.49044 15.8511H16.1923C16.9583 15.8511 17.693 16.1554 18.2346 16.6971C18.7763 17.2387 19.0806 17.9733 19.0806 18.7393V20.6648C19.0806 21.1965 19.5116 21.6275 20.0433 21.6275C20.575 21.6275 21.006 21.1965 21.006 20.6648V18.7393C21.006 17.4627 20.4989 16.2383 19.5961 15.3355C18.6934 14.4328 17.469 13.9256 16.1923 13.9256H8.49044Z"
                    fill="lightgray"
                  />
                </svg>
              </StyledNavLink>
            </>
          )}
        </Buttons>
      </NavBar>
    </Head>
  );
};

export default Header;
