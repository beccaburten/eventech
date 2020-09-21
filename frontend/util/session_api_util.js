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
        url: "/...", //<<<what goes here? how do I hit my UserController??
        data: { email }
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