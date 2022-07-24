import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    // console.log("Hello I am a constructor from News Component");
    this.state = { articles: [], loading: false };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=b583bc778e744fe1a4f3b171aaa4cefa";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(data);
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div class="container my-3">
        <h2>NewsMonkey- Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-2" key={element.url}>
                <NewsItem
                  //   key={element.url}
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
