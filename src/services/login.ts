// import { useUser } from "@/components/UserContext";

// export async function fetchLogin(usename: string, password:string) {

//     // const host = "http://127.0.0.1:8019";
  
//     const host = process.env.NEXT_PUBLIC_API_URL;
  
  
//     if (!host) {
//       console.error("API host URL is not defined.");
//       return;
//     }

//     const { userId, useUserId } = useUser();
  
//     try {
//       const response = await fetch(`${host}/api/v1/user/login`, {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({username: usename, password: password}),
//       });
  
//       const data = await response.json();
//       useUserId({ status: data.status, information: data.information });
//     } catch (error) { 
//       console.error("Error fetching data:", error);
//     }
//   }
  