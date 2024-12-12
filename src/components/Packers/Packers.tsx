import { Paper, Typography } from "@mui/material";
import styles from "./Packers.module.css";
import { useDesktopMode } from "../../hooks/useDesktop";
import { Packer as PackerModel } from "../../models/packer";
import Packer from "../Packer/Packer";

interface Props {
  packers: PackerModel[];
  isLoading: boolean;
}

function Packers(props: Props) {
  const { packers, isLoading } = props;
  const isDesktop = useDesktopMode();
  return (
    <Paper
      elevation={3}
      sx={{
        p: isDesktop ? 3 : 0.5,
        borderRadius: 3,
        border: () => `1px #6a9dff solid`,
        background: "#baf2df",
        boxShadow: "7px 4px 3px #a5bde6",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Топ сборщики
      </Typography>

      <div>
        <div className={styles.header}>
          <span>ФИО</span>
          <span>Собрано</span>
          <span>Среднее значение чего то</span>
        </div>

        <div className={styles.body}>
          {isLoading
            ? [1, 1, 1, 1, 1].map(() => <Packer skeleton />)
            : packers.map((packer) => (
                <Packer packer={packer} key={packer.id} />
              ))}
        </div>
      </div>
    </Paper>
  );
}

export default Packers;
