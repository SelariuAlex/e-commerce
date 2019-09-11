import React from 'react';
import './footer.styles.scss';

export default () => {
  return (
    <footer className="footer">
      Copyright &copy; {new Date().getFullYear()} Șelariu Alexandru
    </footer>
  );
};
