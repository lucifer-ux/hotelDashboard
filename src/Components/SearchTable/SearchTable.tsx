import React from 'react';
import './searchtable.css';

interface DataRow {
  [key: string]: string | number;
}

interface Props {
  data: DataRow[];
}

const SearchTable: React.FC<Props> = ({ data }) => {
  if (data.length === 0) return <p style={{ textAlign: 'center', color: 'white' }}>No data found.</p>;

  const headers = Object.keys(data[0]);

  return (
    <table className="data-table">
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {headers.map((key) => (
              <td key={key}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SearchTable