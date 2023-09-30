import gql from "graphql-tag";
import { useGQLQuery } from "../useGraphql";
import TableCompo from "../components/TableCompo";
import "../App.css";

// GraphQL data
const GET_DATA = gql`
  query {
    company {
      ceo
      launch_sites
      coo

      founded
      employees
      name

      founder

      headquarters {
        city
      }

      links {
        website
        twitter
      }
    }
  }
`;

const HomePage = () => {
  const { data, isLoading, error } = useGQLQuery("company", GET_DATA);
  console.log(data);

  // loading and error
  if (isLoading)
    return (
      <div style={{ textAlign: "center", padding: "30px 0px" }}>
        Loading ...
      </div>
    );
  if (error)
    return (
      <div style={{ textAlign: "center", padding: "20px 0px" }}>
        Something went wrong ...
      </div>
    );

  return (
    <div className="container">
      <div className="sort-btn">
        <button
          className="txt"
          onClick={() =>
            alert(
              "Please provide set of data for the sorting and mention the field"
            )
          }
        >
          Sort
        </button>
      </div>
      <TableCompo data={data} />
    </div>
  );
};

export default HomePage;
