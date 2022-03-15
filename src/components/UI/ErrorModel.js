import React from 'react';
import './ErrorModel.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ReactDom from 'react-dom';

const BackDrop = (props) => {
  return  <div className="backdrop" onClick={props.onConfirm}/>
};

const OverLay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>

      <div className="content">
        <p>{props.message}</p>
      </div>

      <footer className="actions">
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

const ErrorModel = (props) => {
  return (
    <div>
      {ReactDom.createPortal(<BackDrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
      {ReactDom.createPortal(<OverLay title={props.title} message={props.message} onClick={props.onConfirm} />, document.getElementById('overlay-root'))}
    </div>
  );
};

export default ErrorModel;
