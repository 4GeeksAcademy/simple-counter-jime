import React from "react";

const Card = (props) => {
    return (
        <div class="card text-bg-dark mb-3 m-1">
            <div class="card-body">
                <h5 class="card-title">{props.digito}</h5>
            </div>
        </div>
    )
}
const SecondsCounter = (props) => {
    return (
        <div className="d-flex col-md-4" >
            <div className="card card-body text-bg-dark mb-3 m-1 ">
                <i className="far fa-clock my-1"></i>
            </div>
            <Card digito={Math.floor(props.counter / 10000 % 10)} />
            <Card digito={Math.floor(props.counter / 10000 % 10)} />
            <Card digito={Math.floor(props.counter / 1000 % 10)} />
            <Card digito={Math.floor(props.counter / 100 % 10)} />
            <Card digito={Math.floor(props.counter / 10 % 10)} />
            <Card digito={props.counter % 10} />
        </div>)
}

export { Card, SecondsCounter };