import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";

import {
  Heading,
  Img,
  ImgWrapper,
  InfoColumn,
  InfoRow,
  InfoSec,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoSection.elements";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  primary,
  start,
  img,
  alt
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img}  alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
