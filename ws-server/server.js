import WebSocket, { WebSocketServer } from "ws";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(customParseFormat);
dayjs.extend(timezone);

const moscowOffsetMinutes = -3 * 60;

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
    state: "На сборку",
    stateTime: "2024-12-06T15:30:00.000Z",
    readyForPackingAt: "2024-12-06T15:30:00.000Z",
    packedAt: null,
    isPacked: false,
  },
  {
    id: "3f9f4d7a-1c82-11ed-0a80-0b95002e06e6",
    type: "customerorder",
    name: "06010",
    state: "На сборку",
    stateTime: "2024-12-07T12:00:00.000Z",
    readyForPackingAt: "2024-12-07T13:00:00.000Z",
    packedAt: null,
    isPacked: false,
  },
  {
    id: "4f9f4d7a-1c82-11ed-0a80-0b95002e06e7",
    type: "customerorder",
    name: "06011",
    state: "Готов к отгрузке",
    stateTime: "2024-12-08T10:00:00.000Z",
    readyForPackingAt: "2024-12-08T10:30:00.000Z",
    packedAt: "2024-12-08T11:00:00.000Z",
    isPacked: true,
  },
  {
    id: "5f9f4d7a-1c82-11ed-0a80-0b95002e06e8",
    type: "customerorder",
    name: "06012",
    state: "На сборку",
    stateTime: "2024-12-09T09:00:00.000Z",
    readyForPackingAt: "2024-12-09T09:30:00.000Z",
    packedAt: null,
    isPacked: false,
  },
  {
    id: "6f9f4d7a-1c82-11ed-0a80-0b95002e06e9",
    type: "customerorder",
    name: "06013",
    state: "На сборку",
    stateTime: "2024-12-10T08:00:00.000Z",
    readyForPackingAt: "2024-12-10T08:45:00.000Z",
    packedAt: null,
    isPacked: false,
  },
  {
    id: "7f9f4d7a-1c82-11ed-0a80-0b95002e06ea",
    type: "customerorder",
    name: "06014",
    state: "Готов к отгрузке",
    stateTime: "2024-12-11T14:00:00.000Z",
    readyForPackingAt: "2024-12-11T14:30:00.000Z",
    packedAt: "2024-12-11T15:00:00.000Z",
    isPacked: false,
  },
  {
    id: "8f9f4d7a-1c82-11ed-0a80-0b95002e06eb",
    type: "customerorder",
    name: "06015",
    state: "Собран",
    stateTime: "2024-12-12T11:00:00.000Z",
    readyForPackingAt: "2024-12-12T11:30:00.000Z",
    packedAt: "2024-12-12T11:50:00.000Z",
    isPacked: false,
  },
  {
    id: "9f9f4d7a-1c82-11ed-0a80-0b95002e06ec",
    type: "customerorder",
    name: "06016",
    state: "На сборку",
    stateTime: "2024-12-13T16:00:00.000Z",
    readyForPackingAt: "2024-12-11T16:45:00.000Z",
    packedAt: null,
    isPacked: false,
  },
  {
    id: "af9f4d7a-1c82-11ed-0a80-0b95002e06ed",
    type: "customerorder",
    name: "06017",
    state: "Готов к отгрузке",
    stateTime: "2024-12-14T17:00:00.000Z",
    readyForPackingAt: "2024-12-14T17:30:00.000Z",
    packedAt: "2024-12-14T18:00:00.000Z",
    isPacked: true,
  },
  {
    id: "bf9f4d7a-1c82-11ed-0a80-0b95002e06ee",
    type: "customerorder",
    name: "06018",
    state: "Собран",
    stateTime: "2024-12-15T13:00:00.000Z",
    readyForPackingAt: "2024-12-15T13:30:00.000Z",
    packedAt: "2024-12-15T15:30:00.000Z",
    isPacked: true,
  },

  {
    id: "2f9f4d7a-1c82-11ed-0a80-0b95002e06e51",
    type: "customerorder",
    name: "060091",
    state: "На сборку",
    stateTime: "2024-12-06T15:30:00.000Z",
    readyForPackingAt: "2024-12-06T15:30:00.000Z",
    packedAt: null,
    isPacked: false,
  },
  {
    id: "3f9f4d7a-1c82-11ed-0a80-0b95002e06e61",
    type: "customerorder",
    name: "060101",
    state: "На сборку",
    stateTime: "2024-12-07T12:00:00.000Z",
    readyForPackingAt: "2024-12-07T13:00:00.000Z",
    packedAt: null,
    isPacked: false,
  },
  {
    id: "4f9f4d7a-1c82-11ed-0a80-0b95002e06e71",
    type: "customerorder",
    name: "060111",
    state: "Готов к отгрузке",
    stateTime: "2024-12-08T10:00:00.000Z",
    readyForPackingAt: "2024-12-08T10:30:00.000Z",
    packedAt: "2024-12-08T11:00:00.000Z",
    isPacked: true,
  },
  {
    id: "5f9f4d7a-1c82-11ed-0a80-0b95002e06e81",
    type: "customerorder",
    name: "060121",
    state: "На сборку",
    stateTime: "2024-12-09T09:00:00.000Z",
    readyForPackingAt: "2024-12-09T09:30:00.000Z",
    packedAt: null,
    isPacked: false,
  },
  {
    id: "6f9f4d7a-1c82-11ed-0a80-0b95002e06e91",
    type: "customerorder",
    name: "060131",
    state: "На сборку",
    stateTime: "2024-12-10T08:00:00.000Z",
    readyForPackingAt: "2024-12-10T08:45:00.000Z",
    packedAt: null,
    isPacked: false,
  },
  {
    id: "7f9f4d7a-1c82-11ed-0a80-0b95002e06ea1",
    type: "customerorder",
    name: "060141",
    state: "Готов к отгрузке",
    stateTime: "2024-12-11T14:00:00.000Z",
    readyForPackingAt: "2024-12-11T14:30:00.000Z",
    packedAt: "2024-12-11T15:00:00.000Z",
    isPacked: false,
  },
  {
    id: "8f9f4d7a-1c82-11ed-0a80-0b95002e06eb1",
    type: "customerorder",
    name: "060151",
    state: "Собран",
    stateTime: "2024-12-12T11:00:00.000Z",
    readyForPackingAt: "2024-12-12T11:30:00.000Z",
    packedAt: "2024-12-12T11:50:00.000Z",
    isPacked: false,
  },
  {
    id: "9f9f4d7a-1c82-11ed-0a80-0b95002e06ec1",
    type: "customerorder",
    name: "060161",
    state: "На сборку",
    stateTime: "2024-12-13T16:00:00.000Z",
    readyForPackingAt: "2024-12-11T16:45:00.000Z",
    packedAt: null,
    isPacked: false,
  },
  {
    id: "af9f4d7a-1c82-11ed-0a80-0b95002e06ed1",
    type: "customerorder",
    name: "060171",
    state: "Готов к отгрузке",
    stateTime: "2024-12-14T17:00:00.000Z",
    readyForPackingAt: "2024-12-14T17:30:00.000Z",
    packedAt: "2024-12-14T18:00:00.000Z",
    isPacked: true,
  },
  {
    id: "bf9f4d7a-1c82-11ed-0a80-0b95002e06ee1",
    type: "customerorder",
    name: "060181",
    state: "Собран",
    stateTime: "2024-12-15T13:00:00.000Z",
    readyForPackingAt: "2024-12-15T13:30:00.000Z",
    packedAt: "2024-12-15T15:30:00.000Z",
    isPacked: true,
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

console.log("WebSocket server running on ws://localhost:8080");

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
  const shouldAddNew = Math.random() > 0.3; // С 30% вероятностью добавляем новый элемент

  if (shouldAddNew) {
    // Добавляем новый элемент
    const newSlot = {
      id: Math.random().toString(),
      type: "customerorder",
      name: `060${Math.round(Math.random() * 900)}`,
      state: "На сборку",
      stateTime: dateToFormat(
        minusHour(new Date()),
        "YYYY-MM-DDTHH:mm:ss:SSSZ"
      ),
      readyForPackingAt: dateToFormat(
        minusHour(new Date()),
        "YYYY-MM-DDTHH:mm:ss:SSSZ"
      ),
      packedAt: null,
      isPacked: false,
    };
    slots.push(newSlot);
    broadcast({ type: "update", data: newSlot });
  } else {
    // Изменяем score случайного элемента
    const randomIndex = Math.floor(Math.random() * slots.length);
    if (slots[randomIndex].state === "На сборку") {
      if (Math.random() > 0.5) {
        slots[randomIndex].packedAt = dateToFormat(
          minusHour(new Date()),
          "YYYY-MM-DDTHH:mm:ss:SSSZ"
        );
        slots[randomIndex].state = "Собран";
        slots[randomIndex].isPacked = true;
      } else {
        slots[randomIndex].packedAt = dateToFormat(
          minusHour(new Date()),
          "YYYY-MM-DDTHH:mm:ss:SSSZ"
        );
        slots[randomIndex].state = "Готов к отгрузке";
        slots[randomIndex].isPacked = false;
      }
    } else if (slots[randomIndex].state === "Собран") {
      slots[randomIndex].state = "Готов к отгрузке";
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
