import {test} from "@playwright/test"
// !annotations  - adding some extra label

/*
* skip
* only
* fixme
* fail
* describe
* slow
* setTimeout
*/

test.skip("test1",async()=>{   // will skip this
console.log("test1");
})
test("test2",async()=>{     // will only run this and not others
console.log("test2");
})
test.fixme("test3",async()=>{     // in o/p will show skipped but not intentionally, it is in processing state
console.log("test3");
})
test("test4",async()=>{        // slow - increase time limit if normal test runs in 30sec so it will run in aroung 90sec
console.log("test4");
})
test.describe("test5",async()=>{     // when disks needs to do grouping
  test("inside test5", async () => {
        console.log("test inside test5");
    });
    // console.log("test5");
})
test.fail("test6",async()=>{
console.log("test6");
test("",async({page})=>{
    
})

test("",async()=>{})
test("",()=>{})

})

