import data from "../../../service/data.json";

type TableProps = {
  title: string;
};
const Table = ({ title }: TableProps) => {
  return (
    <div className="w-full m-auto">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">
        {title}
      </h2>
      <table className="w-full text-left border-collapse">
        <tbody>
          {data.tableData.map((item, index) => (
            <tr key={index} className="">
              <td className="py-2 px-4 font-semibold text-gray-300">
                {item.label} :
              </td>
              <td className="py-2 px-4 text-gray-400">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
