import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChipIcon from './ChipIcon';
import styles from './Hero.module.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Show me my spending forecast';
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      setTypedText(current => {
        if (!isDeleting) {
          // Typing
          if (current.length < fullText.length) {
            return fullText.slice(0, current.length + 1);
          } else {
            // Finished typing, wait then delete
            setTimeout(() => setIsDeleting(true), 2000);
            return current;
          }
        } else {
          // Deleting
          if (current.length > 0) {
            return fullText.slice(0, current.length - 1);
          } else {
            // Finished deleting, start over
            setIsDeleting(false);
            return '';
          }
        }
      });
    };

    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting]);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="/assets/logo.png" alt="Logo" className={styles.logoImg} />
        </div>
        <div className={styles.titles}>
          <h1>Money, when it finally talks</h1>
          <p className={styles.subtitle}>Built for real financial decisions</p>
        </div>
      </div>

      <div className={styles.searchBarContainer}>
        <div className={styles.searchPill}>
          <ChipIcon />
          <span className={styles.searchText}>{typedText}<span className={styles.cursor}>|</span></span>
        </div>
      </div>

      <div className={styles.brainContainer}>
        <img src="/assets/brain.png" alt="AI Brain" className={styles.brain} />
      </div>

      <div className={styles.footer}>
        Plan ahead with confidence. <Link to="/login" className={styles.signUpLink}>Login</Link>
      </div>
    </div>
  );
};

export default Hero;
