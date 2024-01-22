//"13.212.75.148"

export async function fetchClassification(text: string, hook: any) {
  const host = process.env.REACT_APP_API_HOST;

  if (!host) {
    console.error("API host is not defined. Check your environment variable.");
    return;
  }

  console.log(host);

  try {
    const response = await fetch(`${host}/api/v1/model/predict/multi`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: text }),
    });

    const data = await response.json();
    hook({ status: data.status, information: data.information });
    // return data.information;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
