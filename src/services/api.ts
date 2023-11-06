export async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}