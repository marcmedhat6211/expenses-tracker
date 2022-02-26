import "./Card.css";

/*
    COMPOSITION( CHILDREN PROPS) (WRAPPER COMPONENT)
    * we created this file so that if we have for example a common css styling between files we can create this wrapper component
    * className: we used the 'card' className to style the wrapper itself and we made the className dynamic so that it takes the 'card' className + the className coming from the props
    * props.children: this represents everything that comes in the wrapper div
    * By doing that we exported some duplicate code from the css
*/

const Card = (props) => {
  const className = `card ${props.className}`;

  return <div className={className}>{props.children}</div>;
};

export default Card;
