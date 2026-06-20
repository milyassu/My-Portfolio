type Column = string;

type Props = {
  headers: Column[];
  rows: string[][];
};

export default function ProjectTable({
  headers,
  rows,
}: Props) {
  return (
    <div className="overflow-x-auto">

      <table
        className="
        w-full
        border
        border-border
        rounded-lg
        overflow-hidden
        "
      >
        <thead>
          <tr className="bg-muted">

            {headers.map((header) => (
              <th
                key={header}
                className="
                p-4
                text-left
                "
              >
                {header}
              </th>
            ))}

          </tr>
        </thead>

        <tbody>

          {rows.map((row, index) => (
            <tr
              key={index}
              className="
              border-t
              border-border
              "
            >
              {row.map((cell) => (
                <td
                  key={cell}
                  className="p-4"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}

        </tbody>
      </table>

    </div>
  );
}