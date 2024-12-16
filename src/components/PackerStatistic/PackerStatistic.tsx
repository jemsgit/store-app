import { Box, Stack, Typography } from "@mui/material";
import { Packer as PackerModel } from "../../models/packer";
import Packer from "../Packer/Packer";
import { recordStyles } from "./PackerStatistic.styles";

interface Props {
  bestPacker?: PackerModel;
  yearCount?: number;
  yearWeight?: number;
}

function PackerStatistic(props: Props) {
  const { bestPacker, yearCount, yearWeight } = props;

  return (
    <Box>
      <Typography
        variant="body1"
        sx={{ color: (theme) => theme.palette.text.secondary, mt: 2 }}
      >
        Лучший сборщик
      </Typography>
      {bestPacker ? <Packer packer={bestPacker} /> : "Не найден"}
      <Typography
        variant="body1"
        sx={{ color: (theme) => theme.palette.text.secondary, mt: 2 }}
      >
        Годовой рекорд
      </Typography>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Box sx={recordStyles}>Число {yearCount}</Box>
        <Box sx={recordStyles}>Вес {yearWeight}</Box>
      </Stack>
    </Box>
  );
}

export default PackerStatistic;
