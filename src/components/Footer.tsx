const Footer: React.FC = () => {
    return (
      <footer style={footerStyle}>
        <div>
          <p>&copy; {new Date().getFullYear()} Mon Jeu de Société</p>
        </div>
        <div style={socialLinksStyle}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    );
  };
  
  const footerStyle = {
    padding: '20px',
    textAlign: 'center' as const,
    backgroundColor: '#f1f1f1',
    position: 'fixed' as const,
    left: 0,
    bottom: 0,
    width: '100%',
  };
  
  const socialLinksStyle = {
    marginTop: '10px',
  };
  
  export default Footer;
  