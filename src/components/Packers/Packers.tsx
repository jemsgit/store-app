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
        border: (theme) => `1px ${theme.palette.text.secondary} solid`,
        boxShadow: () => `7px 4px 3px rgb(255 211 105 / 18%)`,
      }}
    >
      <Typography
        variant="h5"
        sx={{ marginBottom: 2, color: (theme) => theme.palette.text.secondary }}
      >
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
