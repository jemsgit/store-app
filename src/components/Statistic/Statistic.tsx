import { Box, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import {
  containerStyles,
  paperContainerStyles,
  paperStyles,
  paperStylesMajor,
  paperValues,
  staticticsStack,
  value2Styles,
  valueStyles,
  valueStylesMajor,
} from "./Statistics.styles";

import recordSound from "./recordWasMade.mp3";
import { useDesktopMode } from "../../hooks/useDesktop";

const auido = new Audio(recordSound);

interface Props {
  todayShipment: {
    count: number;
    weight: number;
  };
  tomorrowShipment: {
    count: number;
    weight: number;
  };
  todayShipmentCount: number;
  yesterdayShipmentCount: number;
  todayAcceptedCount: number;
  yesterdayAcceptedCount: number;
  yearRecord: number;
  monthlyAverageTime: number;
  isLoading: boolean;
}

function Statistic(props: Props) {
  const {
    todayShipment,
    tomorrowShipment,
    todayShipmentCount,
    yesterdayShipmentCount,
    todayAcceptedCount,
    yesterdayAcceptedCount,
    yearRecord,
    monthlyAverageTime,
    isLoading,
  } = props;

  let recordRef = useRef(yearRecord);
  let recordElRef = useRef<HTMLSpanElement | null>(null);
  const isDesktop = useDesktopMode();

  const [shipmentCountIsVisible, setVisibility] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibility((prev) => !prev);
    }, 30 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (recordRef.current) {
      setTimeout(() => {
        if (recordElRef.current) {
          recordElRef.current.classList.add("record");
          setTimeout(() => {
            if (!recordElRef.current) {
              return;
            }
            recordElRef.current.classList.remove("record");
          }, 3000);
        }
      }, 3000);
      confetti({
        particleCount: 300,
        spread: 160,
      });

      try {
        auido.play();
      } catch (e) {}
      console.log("Рекорд склада побит!");
    }
    recordRef.current = yearRecord;
  }, [yearRecord]);

  return (
    <Box sx={containerStyles}>
      <Stack direction={isDesktop ? "row" : "column"} sx={staticticsStack}>
        <Box sx={paperContainerStyles(isDesktop)}>
          <Paper sx={paperStyles(isLoading, isDesktop)}>
            <Typography
              variant="h6"
              sx={{ textDecoration: "underline", textAlign: "left", mb: 2 }}
            >
              Заказы
            </Typography>
            <Stack direction="row" sx={paperValues}>
              <Box>
                Сегодня {shipmentCountIsVisible ? "(число)" : "(вес)"}
                <Box sx={shipmentCountIsVisible ? valueStyles : value2Styles}>
                  {shipmentCountIsVisible
                    ? todayShipment.count
                    : Math.round(todayShipment.weight)}
                </Box>
              </Box>
              <Box>
                Завтра {shipmentCountIsVisible ? "(число)" : "(вес)"}
                <Box sx={shipmentCountIsVisible ? valueStyles : value2Styles}>
                  {shipmentCountIsVisible
                    ? tomorrowShipment.count
                    : Math.round(tomorrowShipment.weight)}
                </Box>
              </Box>
            </Stack>
          </Paper>
        </Box>
        <Box sx={paperContainerStyles(isDesktop)}>
          <Paper sx={paperStyles(isLoading, isDesktop)}>
            <Typography
              variant="h6"
              sx={{ textDecoration: "underline", textAlign: "left", mb: 2 }}
            >
              Приемки
            </Typography>
            <Stack direction="row" sx={paperValues}>
              <Box>
                Сегодня <Box sx={valueStyles}>{todayShipmentCount} </Box>
              </Box>
              <Box>
                Вчера <Box sx={valueStyles}>{yesterdayShipmentCount}</Box>
              </Box>
            </Stack>
          </Paper>
        </Box>
        <Box sx={paperContainerStyles(isDesktop)}>
          <Paper sx={paperStylesMajor(isLoading, isDesktop)}>
            <Box>
              <Box>
                Годовой рекорд 🚀
                <Box sx={valueStylesMajor}>
                  <span ref={recordElRef}>{yearRecord}</span>
                </Box>
              </Box>
              <Box>
                Среднее время сборки 🕑
                <Box sx={valueStylesMajor}>{monthlyAverageTime}</Box>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box sx={paperContainerStyles(isDesktop)}>
          <Paper sx={paperStyles(isLoading, isDesktop)}>
            <Typography
              variant="h6"
              sx={{ textDecoration: "underline", textAlign: "left", mb: 2 }}
            >
              Отгрузки
            </Typography>
            <Stack direction="row" sx={paperValues}>
              <Box>
                Сегодня <Box sx={valueStyles}>{todayAcceptedCount} </Box>
              </Box>
              <Box>
                Вчера <Box sx={valueStyles}>{yesterdayAcceptedCount}</Box>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
}

export default Statistic;
