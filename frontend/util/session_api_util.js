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
        url: '/api/users/auth', 
        data: { email } 
        //does this email go in as my argument as taken from params in the body / form input ?
    })
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