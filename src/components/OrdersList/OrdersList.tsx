import { Order as OrderModel } from "../../models/order";
import { Paper, Typography } from "@mui/material";

import { useDesktopMode } from "../../hooks/useDesktop";
import Order from "../Order/Order";
import styles from "./OrdersList.module.css";

interface OrdersListProps {
  orders: OrderModel[];
  isLoading: boolean;
}

const splitOrdersByColumns = (orders: OrderModel[]) => {
  const ordersByStatus = orders.reduce((acc, order: OrderModel) => {
    if (!acc[order.state]) {
      acc[order.state] = [];
    }
    acc[order.state].push(order);

    return acc;
  }, {} as Record<OrderModel["state"], OrderModel[]>);

  const readyForPacking = ordersByStatus["На сборку"] || [];
  const packed = ordersByStatus["Собран"] || [];
  const readyForDeliver = ordersByStatus["Готов к отгрузке"] || [];
  return [readyForPacking, packed, readyForDeliver];
};

function OrdersList(props: OrdersListProps) {
  const { orders = [], isLoading } = props;
  const isDesktop = useDesktopMode();

  const splitedOrders = isLoading
    ? [
        [1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]
    : splitOrdersByColumns(orders);

  return (
    <Paper
      elevation={3}
      sx={{
        p: isDesktop ? 3 : 0.5,
        borderRadius: 3,
        border: () => `1px #6a9dff solid`,
        boxShadow: "7px 4px 3px #a5bde6",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Онлайн статус
      </Typography>

      <div>
        <div className={styles.header}>
          <span>На сборку</span>
          <span>Собран</span>
          <span>Готов к отрузке</span>
        </div>

        <div className={styles.body}>
          {/* Determine the max number of rows */}
          {Array.from(
            {
              length: Math.max(...splitedOrders.map((group) => group.length)),
            },
            (_, rowIndex) => (
              <div key={rowIndex} className={styles.row}>
                {splitedOrders.map((group, colIndex) => (
                  <div
                    key={colIndex}
                    className={isLoading ? styles.cellSkeleton : styles.cell}
                  >
                    {group[rowIndex] ? (
                      <Order order={group[rowIndex] as OrderModel} />
                    ) : null}
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </Paper>
  );
}

export default OrdersList;
