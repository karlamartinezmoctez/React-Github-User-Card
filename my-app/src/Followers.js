import React from 'react';

function Followers(props){
        return(
            <div>
                <h1>Followers</h1>
                {props.followers.map(follower =>
                    {
                        
                        return(
                            <div key={follower.id}>
                                
                                <div><img src={follower.avatar_url} alt="follower" /></div>
                            <div>
                            <p>{follower.login}</p>
                            <p><a href={follower.html_url}>{follower.html_url}</a></p>
                            </div>
                            </div>
                        )
                    })}

            </div>

        )
}

export default Followers;