import { useEffect, useState } from "react";

interface TableProps {
  data: any;
}

const data = [
  {
    id: 1,
    nome: "Luke",
    sobrenome: "Skywalker",
    avatar: {
      fileUrl:
        "https://istoe.com.br/wp-content/uploads/sites/14/2021/10/anakin-418x235.jpg",
    },
    idade: 27,
    email: "lukeskywalker@hotmail.com",
    cpf: "228.214.360-41",
  },
  {
    id: 2,
    nome: "Baby",
    sobrenome: "Yoda",

    avatar: {
      fileUrl:
        "https://s2.glbimg.com/oGOP1N5kCTMEZa35A7OE1zNZsiA=/e.glbimg.com/og/ed/f/original/2020/01/08/baby-yoda.jpg",
    },
    idade: 234,
    email: "babyyoda@hotmail.com",
    cpf: "049.007.840-01",
  },
  {
    id: 3,
    nome: "Daniel",
    sobrenome: "Mediote",
    avatar: null,
    idade: 22,
    email: "danielmediote@hotmail.com",
    cpf: "040.823.342.70",
  },
  {
    id: 4,
    nome: "Daniel",
    sobrenome: "Mediote",
    avatar: null,
    idade: 22,
    email: "danielmediote@hotmail.com",
    cpf: "040.823.342.70",
  },
  {
    id: 5,
    nome: "Daniel",
    sobrenome: "Mediote",
    avatar: null,
    idade: 22,
    email: "danielmediote@hotmail.com",
    cpf: "040.823.342.70",
  },
  {
    id: 6,
    nome: "Daniel",
    sobrenome: "Mediote",
    avatar: null,
    idade: 22,
    email: "danielmediote@hotmail.com",
    cpf: "040.823.342.70",
  },
];

const Table: React.FunctionComponent = (props) => {
  const [tableKeys, settableKeys] = useState<any[]>([]);
  const [tableData, setTableData] = useState<any[]>([]);
  const [tableHeaderCols, setTableHeaderCols] = useState<number>(0);

  useEffect(() => {
    setTableData(data);
    setTableHeaderCols(Object.keys(data[0]).length);
    settableKeys(Object.keys(data[0]));

    tableData.map((data) => {
      Object.values(data).map((value) => {
        console.log(value);
      });
    });
  }, [data]);

  return (
    <div className="w-full">
      {/** Header */}
      <div className="bg-primary-700 text-primary-100 flex flex-col">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${tableHeaderCols}, minmax(max-content, 1fr))`,
          }}
          className="py-1"
        >
          {tableKeys.map((key) => (
            <div className="pl-4 text-left uppercase text-sm">{key}</div>
          ))}
        </div>
      </div>

      {/** Body */}
      <div className="flex flex-col bg-primary-200 text-primary-800 h-[80px] overflow-y-scroll w-full">
        {tableData.map((data) => (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${tableHeaderCols}, minmax(0, 1fr))`,
            }}
            className="hover:bg-primary-400"
          >
            {Object.values(data).map((value) => (
              <div className="text-left text-sm">
                {typeof value != "object" ? value : "null"}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
