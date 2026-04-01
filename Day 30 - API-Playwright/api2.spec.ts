import { test, request, expect } from '@playwright/test';

test("Cart Flow - Shopper Stack", async () => {

    const apiContext = await request.newContext({
        ignoreHTTPSErrors: true
    });

// Login page
    const loginRes = await apiContext.post(
        "https://www.shoppersstack.com/shopping/users/login",
        {
            data: {
                email: "kj9807887@gmail.com",
                password: "777S@ka111",
                role: "SHOPPER"
            }
        });

    const loginBody = await loginRes.json();
    console.log(loginBody);

    const token = loginBody.data.jwtToken;
    console.log("Token:", token);
    const shopperId = loginBody.data.userId;

//Cart page
    const addCart = await apiContext.post(
        `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/carts`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            data: {
                productId: 56,
                quantity: 4
            }
        });
    expect(addCart.status()).toBeTruthy();

    const getCart = await apiContext.get(
        `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/carts`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    const cartData = await getCart.json();
    expect(getCart.status()).toBe(200);
    const cartItemId = cartData.data[0].cartItemId;

    const updateCart = await apiContext.put(
        `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/carts/${cartItemId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            data: {
                quantity: 2
            }
        });
    expect(updateCart.status()).toBeTruthy();

//Wishlist page
const addWishlist = await apiContext.post(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/wishlist`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        data: {
            productId: 51,
            quantity: 1
        }
    });

const wishlistResponse = await addWishlist.json();
console.log(wishlistResponse);
expect(addWishlist.status()).toBeTruthy();

//address page
const getAddress = await apiContext.get(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const address = await apiContext.post(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        data: {
            "addressId": 0,
            "buildingInfo": "225 Shreeji Nagar",
            "city": "Jaipur",
            "country": "India",
            "landmark": "RK Enterprise",
            "name": "Khushi Jain",
            "phone": "9006544210",
            "pincode": "302018",
            "state": "Rajasthan",
            "streetInfo": "Durgapura, Jaipur",
            "type": "Home"
        }
    });

const addressResponse = await address.json();
console.log(addressResponse);
expect(address.status()).toBeTruthy();


const getAddressBody = await getAddress.json();
console.log(getAddressBody);
expect(getAddress.status()).toBe(200);
const addressId = getAddressBody.data[0].addressId;

const updateAddress = await apiContext.put(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address/${addressId}`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        data: {
             "addressId": 0,
            "buildingInfo": "225 Shreeji Nagar",
            "city": "Jaipur",
            "country": "India",
            "landmark": "RK Enterprise",
            "name": "Khushi Jain",
            "phone": "9876543210",
            "pincode": "302018",
            "state": "Rajasthan",
            "streetInfo": "Durgapura, Jaipur",
            "type": "Home"
        }
    });

const updateAddressBody = await updateAddress.json();
console.log(updateAddressBody);
expect(updateAddress.status()).toBeTruthy();

//order page
const order = await apiContext.get(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/orders`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

// const putOrders = await apiContext.post(
//     `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address`,
//     {
//         headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json"
//         },
//         data: {
//              "address": {
//                     "addressId": addressId,
//                     "buildingInfo": "225 Shreeji Nagar",
//                     "city": "Jaipur",
//                     "country": "India",
//                     "landmark": "RK Enterprise",
//                     "name": "Khushi Jain",
//                     "phone": "9876543210",
//                     "pincode": "302018",
//                     "state": "Rajasthan",
//                     "streetInfo": "Durgapura, Jaipur",
//                     "type": "Home"
//                     },
//                     "paymentMode": "COD"
//         }
//     });

// const ordering = await putOrders.json();
// console.log(ordering);
// expect(putOrders.status()).toBeTruthy();

//order page
const orderBody = await order.json();
console.log(orderBody);

expect(order.status()).toBe(200);

const putOrders = await apiContext.post(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/orders`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        data: {
            addressId: addressId,
            paymentMode: "COD"
        }
    });

const ordering = await putOrders.json();
console.log(ordering);
expect(putOrders.status()).toBeTruthy();

const getReviews = await apiContext.get(
    `https://www.shoppersstack.com/shopping/products/56/reviews`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
);

//Review page
const getReviewsBody = await getReviews.json();
console.log(getReviewsBody);

const addReview = await apiContext.post(
    `https://www.shoppersstack.com/shopping/products/56/reviews`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        data: {
            "dateTime": "2026-03-28T13:26:33.977",
            "description": "woooaahhh",
            "heading": "string",
            "rating": 3,
            "shopperId": shopperId,
            "shopperName": "lalla"
        }
    });

const addReviewBody = await addReview.json();
console.log(addReviewBody);
expect(addReview.status()).toBeTruthy();
const reviewId = addReviewBody.data?.reviewId || addReviewBody.reviewId;

const updateReview = await apiContext.put(
    `https://www.shoppersstack.com/shopping/reviews/${reviewId}`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        data: {
            rating: 5,
            review: "Excellent product"
        }
    });

const updateStatus = updateReview.status();
console.log("Update Status:", updateStatus);

const updateText = await updateReview.text();
console.log(updateText);
expect(updateReview.status()).toBeTruthy();

});