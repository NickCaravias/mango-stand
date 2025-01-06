const API_BASE_URL = process.env.REACT_APP_API_URL 

// Helper to handle API errors
const handleApiError = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || `HTTP error! status: ${response.status}`);
  }
  return response;
};

export const fetchGet = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Includes cookies in the request
    });

    await handleApiError(response);
    return await response.json();
  } catch (error) {
    console.error('Fetch GET Error:', error);
    throw error;
  }
};


export const fetchPost = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Includes cookies in the request
      body: JSON.stringify(data),
    });

    await handleApiError(response);
    return await response.json();
  } catch (error) {
    console.error('Fetch POST Error:', error);
    throw error;
  }
};


export const fetchPut = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    await handleApiError(response);
    return await response.json();
  } catch (error) {
    console.error('Fetch PUT Error:', error);
    throw error;
  }
};


export const fetchDelete = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    await handleApiError(response);
    return await response.json();
  } catch (error) {
    console.error('Fetch DELETE Error:', error);
    throw error;
  }
};
