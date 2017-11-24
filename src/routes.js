import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import BooksPage from './components/books/BooksPage';
import ManageBookPage from './components/books/ManageBookPage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="books" component={BooksPage} />
    <Route path="book/:id" component={ManageBookPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
