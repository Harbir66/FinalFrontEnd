import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import PropTypes from 'prop-types';
import searchIcon from '../../assets/icon-search-dark@3x.png';

function Sidebar({ collections, handleViewChange }) {
  const [selectedListItem, setSelectedListItem] = React.useState(null);
  const [builderPage, setBuilderPage] = React.useState(true);
  const handleListClick = (e) => {
    setSelectedListItem(e.target.innerText);
    setBuilderPage(false);
    handleViewChange('entries');
  };
  const handleBuildClick = () => {
    setBuilderPage(true);
    setSelectedListItem(null);
    handleViewChange('main');
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header">CMS+</div>

      <div className="sidebar-search">
        <span>COLLECTION TYPES</span>
        <img src={searchIcon} alt="searchIcon" />
      </div>
      <nav>
        <ul>
          {collections &&
            collections.map((collection) => (
              <li
                style={{
                  background:
                    selectedListItem === collection.name ? 'black' : '',
                }}
                onClick={handleListClick}
                key={collection.id}
              >
                {collection.name}
              </li>
            ))}
        </ul>
      </nav>

      <button
        onClick={handleBuildClick}
        style={{ background: builderPage ? 'black' : '' }}
        type="button"
      >
        CONTENT TYPE BUILDER
      </button>
    </div>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleViewChange: PropTypes.func.isRequired,
};
