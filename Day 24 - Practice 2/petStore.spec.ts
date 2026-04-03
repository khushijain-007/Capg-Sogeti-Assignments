import {test} from '@playwright/test'
// import {test} from '@playwright/test'

// test("api requests", async({request}) => {
//     let apicontext = await request.newContext();

// }) <-- whi is this showing error look it up

test.skip("login", async({request}) => {
    let r1 = await request.get("https://petstore.swagger.io/v2/user/login", {
        params:{
            username:"kj9807887@gmail.com",
            password:"821@Yes128"
        }
    });
    let res1 = await r1.json();
    console.log(res1);

});

test.skip("createUser", async({request}) => {
    let r1 = await request.post("https://petstore.swagger.io/v2/user", {
        data: {
        id: 0,
        username: "khushi821",
        firstName: "Khushi",
        lastName: "Jain",
        email: "kj9807887@gmail.com",
        password: "821@Yes128",
        phone: "9876543210",
        userStatus: 0
    },
    headers: {
         username:"kj9807887@gmail.com",
        password:"821@Yes128"
    }

    })
    let res1 = await r1.json();
    console.log(res1);
})

test.skip("getpet", async({request}) => {
    let r1 = await request.get("https://petstore.swagger.io/v2/pet/findByStatus", {
        params:{
            status:"available"
        }
    });
    let res1 = await r1.json();
    console.log(res1);
})

let petId: number;

test("postpet", async({request}) => {
  let r1 = await request.post("https://petstore.swagger.io/v2/pet", {
    data: {
        id: 65432,
        name: "koala",
        photoUrls: [
            "string"
        ],
        tags: [
            {
                id: 0,
                name: "string"
            }
        ],
        status: "available"
    }
  })
  let res1 = await r1.json();
  console.log(res1);
  petId = res1.id;
  console.log(petId);
})



test.skip("getPetById", async({request}) => {
  let r1 = await request.get(`https://petstore.swagger.io/v2/pet/${petId}`)
  let res1 = await r1.json();
  console.log(res1);
})

test("deletePetById", async({request}) => {
  console.log(petId);
  let r1 = await request.delete(`https://petstore.swagger.io/v2/pet/${petId}`)
  let res1 = await r1.json();
  console.log(res1);
  console.log(petId);
})