export const goToHome = (navigate) =>{
    navigate("/")
}

export const goToPage = (navigate,page) =>{
    navigate(`/${page}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}