function init() {
}

function log(error) {
    console.log(
        "%c   - - - LOG SERVICE - - -   ",
        "font-size: 25px; background: orange; color: white;",
        error
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    init,
    log
}