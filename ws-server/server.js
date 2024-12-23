import WebSocket, { WebSocketServer } from "ws";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(customParseFormat);
dayjs.extend(timezone);

export function dateToFormat(date, outputFormat = "DD.MM.YYYY") {
  return dayjs(date).format(outputFormat);
}

export function minusHour(date) {
  return dayjs(date).subtract(1, "h").toDate();
}

const slots = [
  {
    id: "2f9f4d7a-1c82-11ed-0a80-0b95002e06e5",
    type: "customerorder",
    name: "06009",
    state: "Подтвержден",
    stateTime: "2024-12-06T15:30:00.000Z",
    readyForPackingAt: "2024-12-06T15:30:00.000Z",
    packedAt: null,
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "3f9f4d7a-1c82-11ed-0a80-0b95002e06e6",
    type: "customerorder",
    name: "06010",
    state: "Подтвержден",
    stateTime: "2024-12-07T12:00:00.000Z",
    readyForPackingAt: "2024-12-07T13:00:00.000Z",
    packedAt: null,
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "4f9f4d7a-1c82-11ed-0a80-0b95002e06e7",
    type: "customerorder",
    name: "06011",
    state: "Отгружен",
    stateTime: "2024-12-08T10:00:00.000Z",
    readyForPackingAt: "2024-12-08T10:30:00.000Z",
    packedAt: "2024-12-08T11:00:00.000Z",
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Собран",
        stateTime: "2024-12-13T15:30:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "5f9f4d7a-1c82-11ed-0a80-0b95002e06e8",
    type: "customerorder",
    name: "06012",
    state: "Подтвержден",
    stateTime: "2024-12-09T09:00:00.000Z",
    readyForPackingAt: "2024-12-09T09:30:00.000Z",
    packedAt: null,
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "6f9f4d7a-1c82-11ed-0a80-0b95002e06e9",
    type: "customerorder",
    name: "06013",
    state: "Подтвержден",
    stateTime: "2024-12-10T08:00:00.000Z",
    readyForPackingAt: "2024-12-10T08:45:00.000Z",
    packedAt: null,
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "7f9f4d7a-1c82-11ed-0a80-0b95002e06ea",
    type: "customerorder",
    name: "06014",
    state: "Отгружен",
    stateTime: "2024-12-11T14:00:00.000Z",
    readyForPackingAt: "2024-12-11T14:30:00.000Z",
    packedAt: "2024-12-11T15:00:00.000Z",
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "8f9f4d7a-1c82-11ed-0a80-0b95002e06eb",
    type: "customerorder",
    name: "06015",
    state: "Собран",
    stateTime: "2024-12-12T11:00:00.000Z",
    readyForPackingAt: "2024-12-12T11:30:00.000Z",
    packedAt: "2024-12-12T11:50:00.000Z",
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "9f9f4d7a-1c82-11ed-0a80-0b95002e06ec",
    type: "customerorder",
    name: "06016",
    state: "Подтвержден",
    stateTime: "2024-12-13T16:00:00.000Z",
    readyForPackingAt: "2024-12-11T16:45:00.000Z",
    packedAt: null,
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "af9f4d7a-1c82-11ed-0a80-0b95002e06ed",
    type: "customerorder",
    name: "06017",
    state: "Отгружен",
    stateTime: "2024-12-14T17:00:00.000Z",
    readyForPackingAt: "2024-12-14T17:30:00.000Z",
    packedAt: "2024-12-14T18:00:00.000Z",
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Собран",
        stateTime: "2024-12-13T15:30:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "bf9f4d7a-1c82-11ed-0a80-0b95002e06ee",
    type: "customerorder",
    name: "06018",
    state: "Собран",
    stateTime: "2024-12-15T13:00:00.000Z",
    readyForPackingAt: "2024-12-15T13:30:00.000Z",
    packedAt: "2024-12-15T15:30:00.000Z",
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Собран",
        stateTime: "2024-12-13T15:30:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },

  {
    id: "2f9f4d7a-1c82-11ed-0a80-0b95002e06e51",
    type: "customerorder",
    name: "060091",
    state: "Подтвержден",
    stateTime: "2024-12-06T15:30:00.000Z",
    readyForPackingAt: "2024-12-06T15:30:00.000Z",
    packedAt: null,
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "3f9f4d7a-1c82-11ed-0a80-0b95002e06e61",
    type: "customerorder",
    name: "060101",
    state: "Подтвержден",
    stateTime: "2024-12-07T12:00:00.000Z",
    readyForPackingAt: "2024-12-07T13:00:00.000Z",
    packedAt: null,
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "4f9f4d7a-1c82-11ed-0a80-0b95002e06e71",
    type: "customerorder",
    name: "060111",
    state: "Отгружен",
    stateTime: "2024-12-08T10:00:00.000Z",
    readyForPackingAt: "2024-12-08T10:30:00.000Z",
    packedAt: "2024-12-08T11:00:00.000Z",
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Собран",
        stateTime: "2024-12-13T15:30:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "5f9f4d7a-1c82-11ed-0a80-0b95002e06e81",
    type: "customerorder",
    name: "060121",
    state: "Подтвержден",
    stateTime: "2024-12-09T09:00:00.000Z",
    readyForPackingAt: "2024-12-09T09:30:00.000Z",
    packedAt: null,
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "6f9f4d7a-1c82-11ed-0a80-0b95002e06e91",
    type: "customerorder",
    name: "060131",
    state: "Подтвержден",
    stateTime: "2024-12-10T08:00:00.000Z",
    readyForPackingAt: "2024-12-10T08:45:00.000Z",
    packedAt: null,
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "7f9f4d7a-1c82-11ed-0a80-0b95002e06ea1",
    type: "customerorder",
    name: "060141",
    state: "Отгружен",
    stateTime: "2024-12-11T14:00:00.000Z",
    readyForPackingAt: "2024-12-11T14:30:00.000Z",
    packedAt: "2024-12-11T15:00:00.000Z",
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "8f9f4d7a-1c82-11ed-0a80-0b95002e06eb1",
    type: "customerorder",
    name: "060151",
    state: "Собран",
    stateTime: "2024-12-12T11:00:00.000Z",
    readyForPackingAt: "2024-12-12T11:30:00.000Z",
    packedAt: "2024-12-12T11:50:00.000Z",
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "9f9f4d7a-1c82-11ed-0a80-0b95002e06ec1",
    type: "customerorder",
    name: "060161",
    state: "Подтвержден",
    stateTime: "2024-12-13T16:00:00.000Z",
    readyForPackingAt: "2024-12-11T16:45:00.000Z",
    packedAt: null,
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "af9f4d7a-1c82-11ed-0a80-0b95002e06ed1",
    type: "customerorder",
    name: "060171",
    state: "Отгружен",
    stateTime: "2024-12-14T17:00:00.000Z",
    readyForPackingAt: "2024-12-14T17:30:00.000Z",
    packedAt: "2024-12-14T18:00:00.000Z",
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Собран",
        stateTime: "2024-12-13T15:30:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "bf9f4d7a-1c82-11ed-0a80-0b95002e06ee1",
    type: "customerorder",
    name: "060181",
    state: "Собран",
    stateTime: "2024-12-15T13:00:00.000Z",
    readyForPackingAt: "2024-12-15T13:30:00.000Z",
    packedAt: "2024-12-15T15:30:00.000Z",
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Собран",
        stateTime: "2024-12-13T15:30:00.000Z",
      },
      {
        state: "Отгружен",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
];

const initialSlots = slots.slice();

// function generateSlots() {
//   const sl = [];
//   for (let i = 0; i < 100; i++) {
//     sl.push({
//       date: "2024-12-08T00:00:00Z",
//       coefficient: 0,
//       warehouseID: 218800 + i,
//       warehouseName: "Алматы Атакент",
//       boxTypeName: "Монопаллеты",
//       boxTypeID: 5,
//       openedAt: "2024-11-26T23:39:21.538984Z",
//     });
//   }
//   return sl;
// }

// const slots = generateSlots();

// Инициализация WebSocket сервера
const wss = new WebSocketServer({ port: 8084 });

console.log("WebSocket server running on ws://localhost:8084");

// Обработчик подключения клиента
wss.on("connection", (ws) => {
  console.log("Client connected");

  // Отправляем начальные данные клиенту
  ws.send(JSON.stringify({ type: "initial", data: slots }));

  // Обработчик закрытия соединения
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Функция для случайного изменения данных
function updateSlots() {
  const shouldAddNew = Math.random() > 0.6; // С 30% вероятностью добавляем новый элемент

  if (shouldAddNew) {
    // Добавляем новый элемент
    const newSlot = {
      id: Math.random().toString(),
      type: "customerorder",
      name: `060${Math.round(Math.random() * 900)}`,
      state: "Подтвержден",
      stateTime: dateToFormat(new Date(), "YYYY-MM-DDTHH:mm:ss.SSS"),
      readyForPackingAt: dateToFormat(new Date(), "YYYY-MM-DDTHH:mm:ss.SSS"),
      packedAt: null,
      statusHistory: [
        {
          state: "Подтвержден",
          stateTime: "2024-12-12T08:00:00.000Z",
        },
        {
          state: "Отгружен",
          stateTime: "2024-12-14T12:34:56.000Z",
        },
      ],
    };
    slots.push(newSlot);
    broadcast({ type: "update", data: newSlot });
  } else {
    // Изменяем score случайного элемента
    const randomIndex = Math.floor(Math.random() * slots.length);
    if (slots[randomIndex].state === "Подтвержден") {
      if (Math.random() > 0.5) {
        slots[randomIndex].packedAt = dateToFormat(
          new Date(),
          "YYYY-MM-DDTHH:mm:ss.SSS"
        );
        slots[randomIndex].state = "Собран";
        slots[randomIndex].statusHistory = [
          {
            state: "Подтвержден",
            stateTime: "2024-12-12T08:00:00.000Z",
          },
          {
            state: "Собран",
            stateTime: "2024-12-13T15:30:00.000Z",
          },
        ];
        slots[randomIndex].stateTime = dateToFormat(
          new Date(),
          "YYYY-MM-DDTHH:mm:ss.SSS"
        );
      } else {
        slots[randomIndex].packedAt = dateToFormat(
          new Date(),
          "YYYY-MM-DDTHH:mm:ss.SSS"
        );
        slots[randomIndex].stateTime = dateToFormat(
          new Date(),
          "YYYY-MM-DDTHH:mm:ss.SSS"
        );
        slots[randomIndex].state = "Отгружен";
        slots[randomIndex].statusHistory = [
          {
            state: "Подтвержден",
            stateTime: "2024-12-12T08:00:00.000Z",
          },
          {
            state: "Отгружен",
            stateTime: "2024-12-14T12:34:56.000Z",
          },
        ];
      }
    } else if (slots[randomIndex].state === "Собран") {
      slots[randomIndex].state = "Отгружен";
      slots[randomIndex].stateTime = dateToFormat(
        new Date(),
        "YYYY-MM-DDTHH:mm:ss.SSS"
      );
      slots[randomIndex].statusHistory = [
        {
          state: "Подтвержден",
          stateTime: "2024-12-12T08:00:00.000Z",
        },
        {
          state: "Собран",
          stateTime: "2024-12-13T15:30:00.000Z",
        },
        {
          state: "Отгружен",
          stateTime: "2024-12-14T12:34:56.000Z",
        },
      ];
    }
    slots[randomIndex].coefficient += Math.floor(Math.random() * 10) - 5; // Изменение на число от -5 до 5
    broadcast({ type: "update", data: slots[randomIndex] });
  }
}

// Функция для отправки данных всем подключенным клиентам
function broadcast(message) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}

// Запуск изменения данных каждые 10 секунд
setInterval(updateSlots, 10000);
setInterval(() => {
  slots = initialSlots.slice();
  ws.send(JSON.stringify({ type: "initial", data: slots }));
}, 60 * 60000);
