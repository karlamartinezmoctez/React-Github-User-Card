import React, {Component} from 'react';
import App from "./App"

class Followers extends Component{
    render(props){
        return(
            <div>
                {props.followers.map(follower =>
                    {
                        return(
                            <div key={follower.id}>
                            <img src={follower.avatar_url} alt="follower" />
                            </div>
                            <div>
                            <p>"Name:"</p>
                            {follower.login}
                            <p>"URL:"</p>
                            {follower.html_url}
                            </div>
                        )
                    })}

            </div>

        )
    }

}

export default Followers;