import React from 'react';

const Card = (props) => {
  const {data} = props;
  console.log(data);
  const {votes, lang} = data;
  return(
    <>
      <div className= div>
        <h1>Vote Your Language!</h1>
        <div>{votes}</div>
        <div>{lang}</div>
      </div>
    </>
  )
}
export default Card;
