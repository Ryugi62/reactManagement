import React from "react";

function Customer(props) {
  return (
    <div>
      <CustomerProfile id={props.id} image={props.image} name={props.name} />
      <CustomerInfo
        birthday={props.birthday}
        jender={props.jender}
        job={props.job}
      />
    </div>
  );
}

function CustomerProfile(props) {
  return (
    <div>
      <img src={props.image} alt="profile" />
      <h2>
        {props.name}({props.id})
      </h2>
    </div>
  );
}

function CustomerInfo(props) {
  return (
    <div>
      <p>{props.birthday}</p>
      <p>{props.jender}</p>
      <p>{props.job}</p>
    </div>
  );
}

export default Customer;
