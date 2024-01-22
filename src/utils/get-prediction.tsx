//"13.212.75.148"

export async function fetchClassification(text: string, hook: any) {
    //const accessToken = "your_access_token";
    const host = process.env.API_HOST;
    console.log(host)
    const response = await fetch(`http://${host}/api/v1/model/predict/multi`, {
      method: 'POST',
      mode:'cors',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer ' + accessToken, 
      },
      body: JSON.stringify({ text: text }),
    });
    const data = await response.json();
    hook({status:data.status, information: data.information})
    // return data.information;
}