import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    return (
        <nav class="navbar navbar-light bg-light container">
            <a class="navbar-brand" href="#">
                <img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"/>
            </a>
            <form class="form-inline">
                <button class="btn btn-outline-success" type="button">Main button</button>
            </form>
        
        </nav>
    )
}