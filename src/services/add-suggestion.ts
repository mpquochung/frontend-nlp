export async function fetchAddSugguestion(username:string,text: string,clas:any,sent:any, hook: any) {
    const host = "http://127.0.0.1:8019";
  
    if (!host) {
      console.error("API host URL is not defined.");
      return;
    }
  
    try {
      const response = await fetch(`${host}/api/v1/suggest/add`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username:username, text: text, classification:clas, sentiment:sent }),
      });
  
      const data = await response.json();
      console.log(data);
      hook({ status: data.status, information: data.information });
    } catch (error) { 
      console.error("Error fetching data:", error);
    }
  }
  