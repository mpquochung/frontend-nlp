export async function fetchVisualization(page_id: string,date_added:string,duration:string, hook: any,loading:any) {

    // const host = "http://127.0.0.1:8019";
  
    const host = process.env.NEXT_PUBLIC_API_URL;
  
  
    if (!host) {
      console.error("API host URL is not defined.");
      return;
    }
    if (page_id === 'none'){
        console.error("page_id is not defined.");
        return;
    }
  
    try {
      const response = await fetch(`${host}/api/v1/visualize/data`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ page_id: page_id,date_added:date_added,duration:duration}),
      });
  
      const data = await response.json();
      console.log(data);
      hook({ status: data.status, information: data.information });
      loading(false);
    } catch (error) { 
      console.error("Error fetching data:", error);
      loading(false);
    }
  }
  