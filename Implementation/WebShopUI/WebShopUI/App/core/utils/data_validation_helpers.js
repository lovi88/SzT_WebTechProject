function isNullOrUndefined(param) {
    
    if (param === undefined || param === null) {
        return true;
    }

    return false;
}

function isNullOrUndefinedOrEmpty(param) {
    nu = isNullOrUndefined(param);

    if (nu || param === "") {
        return true;
    }

    return false;
}