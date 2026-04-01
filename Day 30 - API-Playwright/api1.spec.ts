import {test, request} from '@playwright/test';

test("Basic API - Pet Store", async({request})=>{
    let r1 = await request.post("https://petstore.swagger.io/v2/pet",{
        data:{
            id:51,
            name:"koala",
            status:"available"
        }
    });

    const body = await r1.json();
    console.log(body);
    console.log(body.name);
});


