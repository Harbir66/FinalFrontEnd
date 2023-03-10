import React from 'react';
import './ContentType.css';
import { useNavigate } from 'react-router-dom';
import {
  Sidebar,
  Header,
  EntriesCount,
  DottedButton,
  DisplayButton,
  FieldEntry,
  EntriesHeader,
  ContentEntries,
  ModalForm,
} from '../../components';
import makeRequest from '../../utils/makeRequest';
import {
  CREATE_NEW_COLLECTION,
  CREATE_NEW_ENTRY,
  CREATE_NEW_FIELD,
  DELETE_FIELD,
  GET_ALL_DATA,
  GET_ALL_ENTRIES,
  UPDATE_FIELD,
  DELETE_ENTRY,
} from '../../constants/apiEndPoints';
import { getCollectionNamesFromData } from '../../utils/common';
import editIcon from '../../assets/user-pencil-write-ui-education@3x.png';

function ContentTypes() {
  const [allData, setAllData] = React.useState([]);
  const [view, setView] = React.useState('main');
  const [selectedContentId, setSelectedContentId] = React.useState(null);
  const [selectedCollectionId, setSelectedCollectionId] = React.useState(null);
  const [entries, setEntries] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const navigate = useNavigate();
  const [formInput, setFormInput] = React.useState({});

  const handleInputChanges = (e) => {
    setFormInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleAdd = async () => {
    const response = await makeRequest(
      CREATE_NEW_ENTRY(selectedCollectionId),
      {
        data: {
          fields: Object.keys(formInput),
          values: Object.values(formInput),
        },
      },
      navigate
    );
    if (response) {
      const getData = await makeRequest(
        GET_ALL_ENTRIES(selectedCollectionId),
        {},
        navigate
      );
      setEntries(getData.data.values);
      closeModal();
    }
  };

  React.useEffect(() => {
    makeRequest(GET_ALL_DATA, {}, navigate).then((data) => {
      setAllData(data);
      setSelectedContentId(data[0].id);
      setSelectedCollectionId(data[0].id);
    });
  }, []);

  const handleViewChange = (newView) => {
    setView(newView);
  };
  const handleContentTypeChange = (newContentId) => {
    setSelectedContentId(newContentId);
  };

  const handleFieldDelete = async (field) => {
    try {
      const response = await makeRequest(
        DELETE_FIELD(selectedContentId),
        { data: { field } },
        navigate
      );
      if (response) {
        const newAllData = allData.map((collection) => {
          if (collection.id === selectedContentId) {
            const newFields = collection.fields.filter((f) => f !== field);
            return { ...collection, fields: newFields };
          }
          return collection;
        });
        setAllData(newAllData);
      }
    } catch (err) {
      //
    }
  };

  const handleNewType = async (input) => {
    try {
      const response = await makeRequest(
        CREATE_NEW_COLLECTION,
        { data: { contentType: input } },
        navigate
      );
      if (response) {
        const newAllData = [...allData, response.data];
        setAllData(newAllData);
        setSelectedContentId(response.data.id);
      }
    } catch (err) {
      //
    }
  };

  const handleFieldAdd = async (field) => {
    try {
      const response = await makeRequest(
        CREATE_NEW_FIELD(selectedContentId),
        { data: { field } },
        navigate
      );
      if (response) {
        const newAllData = allData.map((collection) => {
          if (collection.id === selectedContentId) {
            const newFields = [...collection.fields, field];
            return { ...collection, fields: newFields };
          }
          return collection;
        });
        setAllData(newAllData);
      }
    } catch (err) {
      //
    }
  };

  const handleFieldRename = async (field, newField) => {
    try {
      const response = await makeRequest(
        UPDATE_FIELD(selectedContentId),
        { data: { field, newField } },
        navigate
      );
      if (response) {
        const newAllData = allData.map((collection) => {
          if (collection.id === selectedContentId) {
            const newFields = collection.fields.map((currentField) =>
              currentField === field ? newField : currentField
            );
            return { ...collection, fields: newFields };
          }
          return collection;
        });
        setAllData(newAllData);
      }
    } catch (err) {
      //
    }
  };

  const handleCollectionChange = async (newCollectionId) => {
    setSelectedCollectionId(newCollectionId);
    const response = await makeRequest(
      GET_ALL_ENTRIES(newCollectionId),
      {},
      navigate
    );
    setEntries(response.data.values);
  };

  if (allData.length === 0) return <div>Loading...</div>;

  const collections = getCollectionNamesFromData(allData);

  const selectedContentName = collections.find(
    (collection) => collection.id === selectedContentId
  ).name;
  const selectedContentFields = collections.find(
    (collection) => collection.id === selectedContentId
  ).fields;
  const selectedContentAllFields = collections.find(
    (collection) => collection.id === selectedContentId
  ).allFields;

  const selectedCollectionName = collections.find(
    (collection) => collection.id === selectedCollectionId
  ).name;
  const selectedCollectionValues = collections.find(
    (collection) => collection.id === selectedCollectionId
  ).values;
  const selectedCollectionAllFields = collections.find(
    (collection) => collection.id === selectedCollectionId
  ).allFields;
  const heading = view === 'main' ? 'Content Types' : selectedCollectionName;

  const modalForm = (
    <ModalForm isOpen={isOpen} onClose={closeModal}>
      {selectedCollectionAllFields.map((field) => (
        <div key={field} className="form-group">
          <label htmlFor={field}>{field}</label>
          <input
            type="text"
            name={field}
            id={field}
            // value={formInput[field]}
            onChange={handleInputChanges}
          />
        </div>
      ))}
      <button type="button" onClick={closeModal}>
        cancel
      </button>
      <button onClick={handleAdd} type="button">
        submit
      </button>
    </ModalForm>
  );

  const handleDeleteEntries = async (index) => {
    try {
      const response = await makeRequest(
        DELETE_ENTRY(selectedCollectionId),
        { data: { index } },
        navigate
      );
      if (response) {
        const getData = await makeRequest(
          GET_ALL_ENTRIES(selectedCollectionId),
          {},
          navigate
        );
        setEntries(getData.data.values);
      }
    } catch (err) {
      //
    }
  };

  return (
    <div className="content-type">
      <Sidebar
        collections={collections || []}
        handleViewChange={handleViewChange}
        handleCollectionChange={handleCollectionChange}
      />
      <div className="main-body">
        <Header heading={heading} />
        {view === 'main' ? (
          <div className="content-type-builder">
            <div className="content-types">
              <EntriesCount
                count={collections.length}
                type="Types"
                showSearch
              />
              <DottedButton
                handleNew={handleNewType}
                text="+ New Type"
                large={false}
              />
              <div className="button-container">
                {collections.map((collection) => (
                  <DisplayButton
                    key={collection.id}
                    text={collection.name}
                    count={collection.fields}
                    selected={selectedContentId === collection.id}
                    onClick={() => handleContentTypeChange(collection.id)}
                  />
                ))}
              </div>
            </div>
            <div className="content-type-fields">
              <span className="content-type-header">
                <h1>{selectedContentName}</h1>
                <button type="button">
                  <img src={editIcon} alt="edit-button" />
                </button>
              </span>
              <EntriesCount
                count={selectedContentFields}
                type="Fields"
                showSearch={false}
              />
              <DottedButton
                handleNew={handleFieldAdd}
                text="Add another field"
                large
              />
              <div className="fields-container">
                {selectedContentAllFields.map((field) => (
                  <FieldEntry
                    key={field}
                    fieldName={field}
                    handleFieldDelete={handleFieldDelete}
                    handleFieldRename={handleFieldRename}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="entries">
            <div>
              <span>{selectedCollectionValues} Entries Found</span>
              <button onClick={openModal} type="button">
                Add new
              </button>
            </div>
            <EntriesHeader fields={selectedCollectionAllFields} />
            <div className="entries-container">
              {entries.map((entry, index) => (
                <ContentEntries
                  key={Math.random()}
                  index={index}
                  entry={entry}
                  fields={selectedCollectionAllFields}
                  handleDeleteEntries={handleDeleteEntries}
                  selectedCollectionId={selectedCollectionId}
                  setEntries={setEntries}
                  selectedCollectionAllFields={selectedCollectionAllFields}
                />
              ))}
            </div>
            <div />
          </div>
        )}
      </div>
      {modalForm}
    </div>
  );
}

export default ContentTypes;
