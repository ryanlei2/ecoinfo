import { FaArrowDown } from 'react-icons/fa';
import styles from '../styles/Arrow.module.css'; // Your CSS file for styling

interface ArrowProps {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Arrow = ({ onClick }: ArrowProps) => {
  return (
    <div className={styles.arrow} onClick={onClick}>
      <FaArrowDown size={32} className={styles.arrowIcon} />
    </div>
  );
};

export default Arrow;
