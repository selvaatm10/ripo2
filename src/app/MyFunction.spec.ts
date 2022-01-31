import { addition ,sub , mul , div } from './MyFunction'

describe("Testing the calculator",()=>{
    it("testing only adition",()=>{
        expect(addition(100,200)).toBe(300)
    })
    it("testing only sub",()=>{
        expect(sub(100,200)).toBe(-100)
    })
    it("testing only mul",()=>{
        expect(mul(100,200)).toBe(20000)
    })
    it("testing only div",()=>{
        expect(div(6,3)).toBe(2)
    })
})

describe("string", () =>{
    it("Test the name",()=>{
        let name:any = "selva"
        expect(name).toEqual("selva")
    })
})  
