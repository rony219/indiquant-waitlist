// const BASE_URL = "http://127.0.0.1:8000/api/waitlist";

// export async function getWaitlistDashboard(referralCode) {
//   const response = await fetch(
//     `${BASE_URL}/${referralCode}`
//   );

//   if (!response.ok) {
//     throw new Error("Unable to fetch waitlist data.");
//   }

//   return response.json();
// }



// const BASE_URL = "http://127.0.0.1:8000/api/waitlist";

// export async function getWaitlistDashboard(referralCode) {
//   const response = await fetch(
//     `${BASE_URL}/${referralCode}`
//   );

//   if (!response.ok) {
//     throw new Error("Unable to fetch waitlist data.");
//   }

//   return response.json();
// }

// export async function getWaitlistStats() {
//   const response = await fetch(
//     `${BASE_URL}/stats`
//   );

//   if (!response.ok) {
//     throw new Error("Unable to fetch waitlist stats.");
//   }

//   return response.json();
// }



// const BASE_URL = "http://127.0.0.1:8000/api/waitlist";

// export async function getWaitlistDashboard(referralCode) {
//   const response = await fetch(
//     `${BASE_URL}/${referralCode}`
//   );

//   if (!response.ok) {
//     throw new Error("Unable to fetch waitlist data.");
//   }

//   return response.json();
// }

// export async function getWaitlistStats() {
//   const response = await fetch(
//     `${BASE_URL}/stats`
//   );

//   if (!response.ok) {
//     throw new Error("Unable to fetch waitlist stats.");
//   }

//   return response.json();
// }



const BASE_URL =
  "https://indiquant-waitlist-backend.onrender.com/api/waitlist";

export async function getWaitlistDashboard(referralCode) {
  const response = await fetch(
    `${BASE_URL}/${referralCode}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch waitlist data.");
  }

  return response.json();
}

export async function getWaitlistStats() {
  const response = await fetch(
    `${BASE_URL}/stats`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch waitlist stats.");
  }

  return response.json();
}