export const getCollectionNamesFromData = (data) => {
  const collectionNames = [];
  data.forEach((collection) => {
    // console.log(collection.fields);
    collectionNames.push({
      id: collection.id,
      name: collection.contentType,
      fields: collection.fields.length,
      values: collection.values.length,
      allFields: collection.fields,
    });
  });
  return collectionNames;
};

export const stringToArray = (input) => {
  const output = input
    .replace(/"/g, '')
    .replace(/]/g, '')
    .replace(/\[/g, '')
    .split(',');
  return output;
};
