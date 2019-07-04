import React, {Component, Fragment} from 'react';
import Button from "./button/button";
import styles from './styles/main.scss';

const content = 'Hello world!';

const App = () => (
  <Fragment>
    <div className={styles["resizeable-both"]}>{content}</div>
    <Button label="Regular Button"/>
  </Fragment>
);

export default App;
