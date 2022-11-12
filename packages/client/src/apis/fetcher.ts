export default (url: string, body?: object) => {
  const params: object = body
    ? {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    : { credentials: "include" };

  return fetch(`http://localhost:8000${url}`, params).then((res) => res.json());
};
