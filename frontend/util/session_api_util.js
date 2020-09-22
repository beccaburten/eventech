export const signup = (user) => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
    })
};

export const checkForUser = (email) => {
    return $.ajax({
        method: "GET",
        url: '/api/authenticate', 
        data: { email } 
        //does this email go in as my argument as taken from params in the body / form input ?
    })
    //GET requests don't have bodies but can access query string params
}

export const login = (user) => (
    $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "/api/session"
    })
);