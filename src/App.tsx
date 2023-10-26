import { useState } from 'react'
import "./App.css";
import ExpenseForm from "./components/expenseForm";

interface datas {
  description: string;
  amount: Number;
  category: string;
}

function App() {
  // const [data,setData]=useState();
  const [data, setFormSubmissions] = useState<datas[]>([]);

  const dataHandler = (data: datas) => {
    setFormSubmissions((prevSubmissions) => [...prevSubmissions, data]);
  };
  return (
    <>
      <ExpenseForm onSubmit={dataHandler} />
      {/* {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.amount.toString()}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )} */}
    </>
  );
}

export default App;
