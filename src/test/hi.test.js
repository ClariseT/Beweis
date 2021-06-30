const assert = require("chai").assert;
const op = require("../operacion");

const modulo = op.modulo(4,2);

describe("test", function(){
    it("test modulo", function(){
        assert.equal(modulo, 0);
    });
});