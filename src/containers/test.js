/*const handleForm = async (e) => {
    e.preventDefault();
    let data = await userData(username, password);
    console.log(data);
    console.log(data.header.token);
    const userToken = data.header.token;
    console.log(username, password);
    dispatchEvent(getToken(userToken));
    localStorage.setItem("token", userToken);

    if (userToken) {
        let token = localStorage.getItem("token")
        let userDatas = await userToken(token);
        console.log(userDatas);
        Navigate("/user");
    }
}*/