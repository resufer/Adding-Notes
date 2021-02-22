let createExample = () => {
  if (!localStorage.getItem('Example')) {
    let example = {
      password: "y>pw{xlP",
      ip: '',
      completed: [
        {
          complete: "Sun Feb 22 2021",
          description: "Description2 - complete",
          name: "Note2",
          timeCreate: {
            allTime: 1613866527654,
            common: "Sun Feb 19 2021",
            timeZone: 4
          }
        },
        {
          complete: "Sun Feb 21 2021",
          description: "你好",
          name: "笔记",
          timeCreate: {
            allTime: 1613866527654,
            common: "Sun Feb 20 2021",
            timeZone: -3
          }
        },
      ],
      during: [
        {
          name: "Note4",
          description: "Description4",
          timeCreate: {
            allTime: 1613866548502,
            common: "Sun Feb 21 2021",
            timeZone: 1
          }
        },
        {
          name: "Заметка1",
          description: "Создать свой хук",
          timeCreate: {
            allTime: 1613866548502,
            common: "Sun Feb 21 2021",
            timeZone: 5
          }
        },
        {
          name: "Update",
          description: "Update this Example",
          timeCreate: {
            allTime: 1613866548502,
            common: "Sun Feb 21 2021",
            timeZone: -4
          }
        },
        {
          name: "Заметка2",
          description: "Почитать доку по ноде",
          timeCreate: {
            allTime: 1613866548502,
            common: "Sun Feb 21 2021",
            timeZone: 7
          }
        },

      ],
      failed: [
        {
          fail: "Sun Feb 21 2021",
          name: "Note3",
          description: "Description3 - fail",
          timeCreate: {
            allTime: 1613866538614,
            common: "Sun Feb 21 2021",
            timeZone: 3
          }
        },
        {
          fail: "Sun Feb 21 2021",
          name: "المذكرة",
          description: "شراء الخبز",
          timeCreate: {
            allTime: 1613866538614,
            common: "Sun Feb 21 2021",
            timeZone: 3
          }
        },
      ]
    };

    localStorage.setItem('Example', JSON.stringify(example));
  }
};



export default createExample;