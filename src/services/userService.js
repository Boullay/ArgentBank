
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

export async function userProfile(token) {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "post",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
            'Authorization': `Bearer ${token}`
        },
    });
    return await response.json();
}