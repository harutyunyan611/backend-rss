module.exports = class Transformer {
    constructor(entity) {
        this.data = entity;
        this.instance = entity;
    }

    toCollection(args) {
        return this.data.map((elem) => {
            return this.toSingle.call({data: elem}, args);
        });
    }
};
