function runAsyncWrapper(callback) {
    return function (req, res) {
        callback(req, res)
            .catch(error => res.status(500).json(`Error: ${error}`))
    }
}

module.exports=runAsyncWrapper;