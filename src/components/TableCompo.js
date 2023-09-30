import { Link } from "react-router-dom";

// Table component
const TableCompo = ({ data }) => {
  // Styles
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    border: "2px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const tdStyle = {
    border: "2px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  return (
    <table style={tableStyle}>
      {/* Table header */}
      <thead>
        <tr>
          <th style={thStyle}>Company Name </th>
          <th style={thStyle}> CEO </th>
          <th style={thStyle}>Launch Sites</th>
          <th style={thStyle}>Create At</th>
          <th style={thStyle}>Location </th>
          <th style={thStyle}>Employees </th>
          <th style={thStyle}>Website Link </th>
          <th style={thStyle}>Twitter Link </th>
        </tr>
      </thead>

      {/* Table data */}
      <tbody>
        <tr>
          <td style={tdStyle}>{data.company.name}</td>
          <td style={tdStyle}>{data.company.ceo}</td>
          <td style={tdStyle}>{data.company.launch_sites}</td>

          <td style={tdStyle}>{data.company.founded}</td>
          <td style={tdStyle}>{data.company.headquarters.city}</td>
          <td style={tdStyle}>{data.company.employees}</td>

          <td style={tdStyle}>
            <Link to={data.company.links.website}>
              {data.company.links.website}
            </Link>
          </td>
          <td style={tdStyle}>
            <Link to={data.company.links.twitter}>
              {data.company.links.twitter}
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCompo;
