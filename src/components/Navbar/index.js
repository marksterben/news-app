import { Link } from "react-router-dom";
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Navbar.module.css';

import { CATEGORIES } from '../../constants/categories';
import newsIcon from '../../assets/news-icon.svg';

const Navbar = ({ selected }) => {

  return (
    <nav className={styles.nav}>
      <div className={styles.navIconWrapper}>
        <img className={styles.navIcon} src={newsIcon} alt="navbar icon" />
        <h1 className={styles.navTitle}>NEWS APP</h1>
      </div>

      <div className={styles.categories}>
        {CATEGORIES.map((category, index) => (
          <Link
            key={index}
            to={`/${category.slug}`}
            className={classnames(styles.category, {
              [styles.selected]: selected === category.slug
            })}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  selected: PropTypes.string
};

export default Navbar;
