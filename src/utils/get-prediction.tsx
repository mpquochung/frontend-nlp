export async function fetchClassification(text: string) {
    const accessToken = "your_access_token";
    const response = await fetch('http://192.168.0.198:8019/api/v1/model/predict/classNameification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken, 
      },
      body: JSON.stringify({ text: text }),
    });
    const data = await response.json();
    return data.information;
}