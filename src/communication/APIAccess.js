let backendAddress = "https://jnhenkel-findnearbyplaces.herokuapp.com/";

let apiAccess = {
    addUser: (name, email, password) => {
        return fetch(`${backendAddress}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(x => x.json())
            .then(x => {
                //console.log(x);
                return x;
            })
    },

    login: (email, password) => {
        return fetch(`${backendAddress}/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({ email, password })
        })
            .then(x => x.json())
            .then(x => {
                //console.log(x);
                return x;
            })
    },

    logout: () => {
        return fetch(`${backendAddress}/logout`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true
            },
        })
            .then(x => x.json())
            .then(x => {
                return x;
            })
    },
};

export default apiAccess;