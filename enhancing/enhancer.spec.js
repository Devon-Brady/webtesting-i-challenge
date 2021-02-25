const enhancer = require('./enhancer.js');

// test away!

class Item  {
    constructor(name,durability,enhancement){
    this.name= name,
    this.durability=durability,
    this.enhancement= enhancement
   }
   }

it("test is working",()=>{
    expect(2).toBe(2)
})

describe("can repair", ()=>{
   let sword
    beforeEach(()=>{
       sword = new Item("sword",50,0)
    })
    it("exists",()=>{
        expect(Item).toBeDefined()
    })
    it("can set duribility to 100",()=>{
        const expected = 100
        const actual = enhancer.repair(sword)
        expect(actual.durability).toBe(expected)
    })
    it("can incress enhancment by 1 ",()=>{
        const expected = sword.enhancement + 1
        const actual = enhancer.success(sword)
        expect(actual.enhancement).toBe(expected)
    })
    it("Maxes out the enhancement at 20",()=>{
        const swordWithMaxedEnhancement = {...sword, enhancement:20}
        const expected = swordWithMaxedEnhancement
        const actual = enhancer.success(swordWithMaxedEnhancement)
        expect(actual).toBe(expected)
    })
    it("Changes enhancement of item by 1 if  enhancement is over 16",()=>{
        const swordWith17Enhcancement = {...sword, enhancement:17}
        const expected = swordWith17Enhcancement.enhancement -1 
        const actual = enhancer.fail(swordWith17Enhcancement)
        expect(actual.enhancement).toBe(expected)
    })
    it("Lowers duribility by 10 if enhancement is greater then 15",()=>{
        const swordWith16Enhancement = {...sword, enhancement:16}
        const expected = swordWith16Enhancement.durability -10
        const actual = enhancer.fail(swordWith16Enhancement)
        expect(actual.durability).toBe(expected)
    })
    it("Lowers duribilty by 5 id enhancement is less then 15", ()=>{
        const expected = sword.durability -5
        const actual = enhancer.fail(sword)
        expect(actual.durability).toBe(expected)
    })
        
    

})

