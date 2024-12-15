import { Packer as PackerModel } from "../../models/packer";
import styles from "./Packer.module.css";

interface Props {
  packer?: PackerModel;
  skeleton?: boolean;
}

function Packer(props: Props) {
  const { packer, skeleton } = props;

  if (skeleton) {
    return (
      <div className={styles.row}>
        <div className={styles.cellSkeleton}></div>
        <div className={styles.cellSkeleton}></div>
      </div>
    );
  }
  return (
    <div className={styles.row}>
      <div className={styles.cell}>{packer?.name}</div>
      <div className={styles.cell}>{packer?.packsCount}</div>
    </div>
  );
}

export default Packer;
