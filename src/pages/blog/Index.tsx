import React from "react";
import {
  BlogWrapper,
  PitchContainer,
  PitchContentContainer,
  PitchSubTitle,
  PitchTitle,
  PitchMan,
  ArticleButton,
  CardWrapper,
  Card,
  CardBtn,
  CardContent,
  ArticleContainer
} from "./style";
import { AppLayout } from "../../layout/Index";
import { BsArrowUpRight } from "react-icons/bs";
import LandingPage from "../../layout/landing/Index";

const articledata = [
  {
    title: "How BRC-20 inscriptions sent BTC transaction fees to 5-year highs",
    desc: "BRC-20 inscriptions drove Bitcoin transaction fees to their highest level since 2017. Here’s how.",
    image: "assets/imgs/article.png",
  },
  {
    title: "How BRC-20 inscriptions sent BTC transaction fees to 5-year highs",
    desc: "BRC-20 inscriptions drove Bitcoin transaction fees to their highest level since 2017. Here’s how.",
    image: "assets/imgs/article.png",
  },
  {
    title: "How BRC-20 inscriptions sent BTC transaction fees to 5-year highs",
    desc: "BRC-20 inscriptions drove Bitcoin transaction fees to their highest level since 2017. Here’s how.",
    image: "assets/imgs/article.png",
  },
];

const Blog = () => {
  return (
    <AppLayout>
      <LandingPage />
      <BlogWrapper>
          <PitchContainer>
            <img
              src="assets/imgs/article.png"
              alt=""
              className="pitch-img"
              placeholder="blur"
            />
            <PitchContentContainer>
              <PitchSubTitle>
                <span>Category</span>November 22, 2021
              </PitchSubTitle>
              <PitchTitle>
                Pitch termsheet backing validation focus release.
              </PitchTitle>
              <PitchMan>
                <img src="assets/imgs/author.png" alt="" placeholder="blur" />
                <span>Chandler Bing</span>
              </PitchMan>
            </PitchContentContainer>
          </PitchContainer>
          <ArticleContainer>
            <CardWrapper>
              {articledata.map((item, key) => (
                <Card>
                  <img src={item.image} alt="" />
                  <CardContent>
                    <h6>{item.title}</h6>
                    <p>{item.desc}</p>
                    <CardBtn>
                      Read More <BsArrowUpRight />
                    </CardBtn>
                  </CardContent>
                </Card>
              ))}
            </CardWrapper>
          </ArticleContainer>
          <ArticleButton>Load More</ArticleButton>
      </BlogWrapper>
    </AppLayout>
  );
};

export default Blog;
