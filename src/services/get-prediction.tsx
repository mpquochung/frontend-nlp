export async function fetchClassification(text: string, hook: any) {
  const host = "https://www.cheese-backend.store";

  if (!host) {
    console.error("API host URL is not defined.");
    return;
  }

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
  } catch (error) { 
    console.error("Error fetching data:", error);
  }
}
