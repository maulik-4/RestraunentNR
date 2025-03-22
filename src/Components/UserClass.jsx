import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        console.log('child constructor called');
        super(props);
        this.state = {
            count: 0,
            userData: null
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch('https://api.github.com/users/maulik-4');
            const data = await res.json();  
            console.log(data);
            this.setState({ userData: data });
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    render() {
        const {userData } = this.state;
        return (
            <div>
               
                
                
                {userData && (
                    <div>
                        <div className="prof flex items-center gap-2">
                            <img src={userData.avatar_url} className='rounded-full h-[10vh] w-[10vh]' alt="User Avatar" width="100" />
                            <h1>Username: {userData.login}</h1>
                        </div>
                       
                        
                        <h3>Bio: {userData.bio}</h3>
                        
                    </div>
                )}
            </div>
        );
    }
}

export default UserClass;