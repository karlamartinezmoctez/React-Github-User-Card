import React from 'react';

function Card(props){
        return(
            <div key={props.userData.id}>
                <img src={props.userData.avatar_url} alt="Profile Picture"/>
                <h1>{props.userData.login}</h1>
                <a href={props.userData.html_url}>{props.userData.html_url}</a>
            </div>

        )
}
export default Card;

