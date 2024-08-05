import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
    {
        id: 1,
        userName: "X",
        name :"X Account",
        isFollowing: true
    },
    {
        id: 2,
        userName: "Twitter",
        name :"Twitter Account",
        isFollowing: false
    },
    {
        id: 3,
        userName: "Youtube",
        name :"Youtube Account",
        isFollowing: true
    }
]

export function App() {
    return(
        <div className="App">
           {
            users.map(({id,userName,name,isFollowing}) => (
                <TwitterFollowCard
                key={id}
                userName={userName}
                name={name}
                initialIsFollowing={isFollowing}
                >
                </TwitterFollowCard>
            ))
           }
        </div>
    )
}
