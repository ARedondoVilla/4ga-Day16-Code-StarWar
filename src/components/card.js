import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    return (
        <div class="card">
            <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary"> <Link to="/pages/more.js">About</Link></a>
                </div>
        </div>
    )
}