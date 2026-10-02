async function login(username, password)
{
    if(username === "admin" && password === "1234")
    {
        return "Login Successful";
    }
    else
    {
        throw new Error("Invalid Username or Password");
    }
}

async function main()
{
    try
    {
        let result = await login("admin", "1234");
        console.log(result);
    }
    catch(error)
    {
        console.log("Login Failed:", error.message);
    }
}

main();
