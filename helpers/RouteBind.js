module.exports = function routeBind(controller, action, request) {
    return (req, res, next) => {
        let controllerInstance = new controller();
        controllerInstance[action](new request(req), res, next);
    };
};
