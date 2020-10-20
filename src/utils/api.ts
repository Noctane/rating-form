export default async function api(url: string, data: any = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: data,
  });
  return response.json();
}