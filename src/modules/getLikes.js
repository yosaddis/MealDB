const likesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TlaDzXrnU0ZYjAKdWxNN/likes/';

export const addLikeToItem = async (itemId) => {
  const request = new Request(likesLink);
  const response = await fetch(request, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ item_id: `${itemId}` }),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const getLikesToItems = async () => {
  const response = await fetch(likesLink);
  const data = await response.json();
  return data;
};
