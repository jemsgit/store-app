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
        state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "4f9f4d7a-1c82-11ed-0a80-0b95002e06e7",
    type: "customerorder",
    name: "06011",
    state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "7f9f4d7a-1c82-11ed-0a80-0b95002e06ea",
    type: "customerorder",
    name: "06014",
    state: "Требуется отгрузка",
    stateTime: "2024-12-11T14:00:00.000Z",
    readyForPackingAt: "2024-12-11T14:30:00.000Z",
    packedAt: "2024-12-11T15:00:00.000Z",
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "af9f4d7a-1c82-11ed-0a80-0b95002e06ed",
    type: "customerorder",
    name: "06017",
    state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "4f9f4d7a-1c82-11ed-0a80-0b95002e06e71",
    type: "customerorder",
    name: "060111",
    state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "7f9f4d7a-1c82-11ed-0a80-0b95002e06ea1",
    type: "customerorder",
    name: "060141",
    state: "Требуется отгрузка",
    stateTime: "2024-12-11T14:00:00.000Z",
    readyForPackingAt: "2024-12-11T14:30:00.000Z",
    packedAt: "2024-12-11T15:00:00.000Z",
    statusHistory: [
      {
        state: "Подтвержден",
        stateTime: "2024-12-12T08:00:00.000Z",
      },
      {
        state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
  {
    id: "af9f4d7a-1c82-11ed-0a80-0b95002e06ed1",
    type: "customerorder",
    name: "060171",
    state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
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
        state: "Требуется отгрузка",
        stateTime: "2024-12-14T12:34:56.000Z",
      },
    ],
  },
];

const packers = [
  {
    id: "1",
    name: "Николаев П. А.",
    packsCount: 43,
    perValue: 23.43,
  },
  {
    id: "2",
    name: "Самолов П. П.",
    packsCount: 23,
    perValue: 13.43,
  },
  {
    id: "3",
    name: "Валуев С. А.",
    packsCount: 11,
    perValue: 4.43,
  },
  {
    id: "4",
    name: "Николаев П. А.",
    packsCount: "43",
    perValue: "23.43",
  },
];

export default function mocks() {
  return [
    {
      url: "/api/orders",
      method: "get",
      timeout: 2000,
      response: slots,
    },
    {
      url: "/api/packers",
      method: "get",
      timeout: 2000,
      response: packers,
    },
    {
      url: "/api/statistic",
      method: "get",
      timeout: 2000,
      response: {
        todayShipment: {
          count: 23,
          weight: 123,
        },
        tomorrowShipment: {
          count: 42,
          weight: 2312,
        },
        todayShipmentCount: 4324,
        yesterdayShipmentCount: 423423,
        yearRecord: 34234234,
        monthlyAverageTime: 34,
      },
    },
  ];
}
