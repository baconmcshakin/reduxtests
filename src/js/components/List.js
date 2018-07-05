// src/js/components/List.js
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles.data };
};
const ConnectedList = ({ articles = [] }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.text}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);
export default List;
