import React, { useState } from "react";
import {
  ArticleWrapper,
  ArticleContainer,
  ArticleButton,
  CardWrapper,
  Card,
  CardBtn,
  CardContent,
} from "./style";
// import articledata from "../../mockup/article.data.json";
import { BsArrowUpRight } from "react-icons/bs";
import axios from "axios";

interface IArticle {
  title: string,
  desc: string,
  image: string,
  link: string
}

const Article = () => {
  const [articledata, setArticledata] = useState<IArticle[]>([]);
  axios
    .get(
      "https://raw.githubusercontent.com/salimcansatici/mock-data/main/article.data.json"
    )
    .then((res) => setArticledata(res.data))
    .catch((err) => console.log(err));

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
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Read More <BsArrowUpRight />
                  </a>
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
