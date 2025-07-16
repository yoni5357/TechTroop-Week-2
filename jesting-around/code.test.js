const ex = require('./code.js')

describe("test isEven function", () =>{
    it("should return true if even", () =>{
        expect(ex.isEven(2)).toBeTruthy()
    })

    it("should return false if not even", () =>{
        expect(ex.isEven(3)).toBeFalsy()
    })
})

describe("test removeAtLeastOne function", () => {
    it("should remove at least one element from the array `arr`", () => {
        let arr = [1,4,5,2,3]
        let arrLen = arr.length
        expect(ex.removeAtLeastOne(arr)).not.toHaveLength(arrLen)
    })

    it("should recieve an array", () => {
        expect(() => ex.removeAtLeastOne([1,2,3])).not.toThrow()
        expect(() => ex.removeAtLeastOne("string")).toThrow()
    })
})

describe("test simplify function", () => {

    it(`should return a clean string without these symbols: "!", "#", ".", ",", "'"`, () => {
        let str = "as,!a#p"
        expect(ex.simplify(str)).toBe("asap")
    })
    it("should return a string", () => {
        expect(typeof ex.simplify("test")).toBe("string")
    })
})



describe("test validate function", () => {

    it("shouls recieve an array of booleans", () => {
        expect(() => ex.validate([true, false, true])).not.toThrow()
        expect(() => ex.validate([1, 2, 3])).toThrow()
    })

    it("It should verify that there is at least one boolean in the array", () => {
        expect(() => ex.validate([true, false, true])).not.toThrow()
        expect(() => ex.validate([])).toThrow()
    })

    it("should return true if there are more trues the falses in the array", () => {
        expect(ex.validate([true, false, true])).toBeTruthy()
        expect(ex.validate([false, false, true])).toBeFalsy()
        expect(ex.validate([false, false, false])).toBeFalsy()
    })
})

describe("test add function", () => {
    it("should call the push function", () => {
        const pushSpy = jest.spyOn(Array.prototype, 'push');
        ex.add(1, 2);
        expect(pushSpy).toHaveBeenCalledWith(1, 2);
        pushSpy.mockRestore();

    })
})

