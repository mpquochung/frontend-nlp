export async function submitMessage(email: string, title: string, message: string, loading: any) {


    try {
        const response = await fetch(`http://127.0.0.1:5000/api/message`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            
            body: JSON.stringify({ email, title, message }), 
          });
  
      const data = await response.json();
    } catch (error) { 
      console.error("Error fetching data:", error);
    }
    loading(false);  
  }


