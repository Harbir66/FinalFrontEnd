export const BACKEND_URL = 'http://localhost:3020/api';

export const GET_ALL_DATA = {
  url: 'collections',
  method: 'GET',
};

export const DELETE_FIELD = (collectionId) => ({
  url: `fields/${collectionId}`,
  method: 'DELETE',
});

export const CREATE_NEW_COLLECTION = {
  url: 'collections',
  method: 'POST',
};

export const CREATE_NEW_FIELD = (collectionId) => ({
  url: `fields/${collectionId}`,
  method: 'POST',
});

export const UPDATE_FIELD = (fieldId) => ({
  url: `fields/${fieldId}`,
  method: 'PATCH',
});

export const GET_ALL_ENTRIES = (collectionId) => ({
  url: `entries/${collectionId}`,
  method: 'GET',
});

export const CREATE_NEW_ENTRY = (collectionId) => ({
  url: `entries/${collectionId}`,
  method: 'POST',
});

export const DELETE_ENTRY = (collectionId) => ({
  url: `entries/${collectionId}`,
  method: 'DELETE',
});

export const UPDATE_ENTRY = (collectionId) => ({
  url: `entries/${collectionId}`,
  method: 'PATCH',
});
