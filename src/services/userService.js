export async function userToken(_token) {
    let data = { token: _token }
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "post",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        header: JSON.stringify(data)
    });
    return await response.json();
}

export async function userData(email, password) {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "post",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({email, password})
    });
    return await response.json();
}

export async function userProfile() {
    const response = await fetch("http://localhost:3001/api/user/profile", {
        method: "post",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
            'Authorization': `Bearer ${window.localStorage.getItem('token')}`
        },
        body: {}
    });
    return await response.json();
}