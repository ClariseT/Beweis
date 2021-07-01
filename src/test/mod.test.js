const assert = require("chai").assert;
const op = require("../operacion");

const mod = op.mod(4,2);

describe("test", function(){
    it("test mod", function(){
        assert.equal(mod, 0);
    });
});