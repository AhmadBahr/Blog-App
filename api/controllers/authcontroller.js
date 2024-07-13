export const register = (req, res) => {

    //Check existing user

    const q = "SELECT * FROM users WHERE email = ? OR username = ?"
}
export const login = (req, res) => {
    res.json({
        message: 'Login'
    })
}
export const logout = (req, res) => {
    res.json({
        message: 'Logout'
    })
}