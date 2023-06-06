import React from "react";
import {
  ArticleWrapper,
  ArticleContainer,
  ArticleButton,
  CardWrapper,
  Card,
  CardBtn,
  CardContent
} from "./style";

import { BsArrowUpRight } from "react-icons/bs";

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

const Article = () => {
  return (
    <ArticleWrapper>
      <ArticleContainer>
        <h1>Featured Articles</h1>
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
        <ArticleButton>Read All Articles</ArticleButton>
      </ArticleContainer>
    </ArticleWrapper>
  );
};

export default Article;
