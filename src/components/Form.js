import React, { useState } from "react";

const Form = (props) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(term);
    setTerm('');
  };

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form className="ui fuild form" onSubmit={onFormSubmit}>
        <h4>Want to try your luck?</h4>
        <div className="field">
          <label>Amount of ether to enter: </label>
          <input className="ui input" value={term} onChange={onInputChange} />
          <div class="ui pointing label">Please enter a value</div>
        </div>
        <button className="ui primary button">Enter</button>
      </form>
    </div>
  );
};

export default Form;
