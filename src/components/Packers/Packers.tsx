import { Paper, Typography } from "@mui/material";
import styles from "./Packers.module.css";
import { useDesktopMode } from "../../hooks/useDesktop";
import { Packer as PackerModel, PackerResponseDTO } from "../../models/packer";
import Packer from "../Packer/Packer";
import PackerStatistic from "../PackerStatistic/PackerStatistic";

interface Props {
  packers: PackerModel[];
  isLoading: boolean;
  record?: PackerResponseDTO["record"];
}

function Packers(props: Props) {
  const { packers, record, isLoading } = props;
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
        Cборщики
      </Typography>

      <div>
        <div className={styles.header}>
          <span>ФИО</span>
          <span>Собрано</span>
        </div>

        <div className={styles.body}>
          {isLoading
            ? [1, 1, 1, 1, 1].map(() => <Packer skeleton />)
            : packers.map((packer) => (
                <Packer packer={packer} key={packer.id} />
              ))}
        </div>
      </div>
      {isLoading ? null : (
        <PackerStatistic
          bestPacker={record?.bestPacker}
          yearCount={record?.yearCount}
          yearWeight={record?.yearWeight}
        />
      )}
    </Paper>
  );
}

export default Packers;
