import { isZero } from "../src/isZero"

describe("isZeroのテスト",()=>{
    it("0ならtrue",()=>{
        const result = isZero(0)
        expect(result).toStrictEqual(true)
    })
    it("0以外ならfalse",()=>{
        const result = isZero(1)
        expect(result).toStrictEqual(false)
    })
      
})