import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Formcontainer from "../formcontainer";
import "../styleComp.css";
import { useState } from "react";

interface datas {
  description: string;
  amount: Number;
  category: string;
}

interface tabledata {
  value: datas[];
  onDelete: (index: number) => void;
  categories: string[];
}
const tableFilter = ({ value, onDelete, categories }: tabledata) => {
  const [selectedCategory, setSelectedCategory] = useState<string | "all">(
    "all"
  );

  const filteredData =
    selectedCategory === "all"
      ? value
      : value.filter((item) => item.category === selectedCategory);
  return (
    <>
      {value.length > 0 && (
        <Formcontainer>
          <Form.Group className="mb-3">
            <Form.Label className="textM">Select the category</Form.Label>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All</option>
              {categories.map((key, ind) => (
                <option key={ind} value={key}>
                  {key}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.amount.toString()}</td>
                  <td>{item.category}</td>
                  <td>
                    <Button
                      variant="light"
                      className=" text-danger btnDelete"
                      onClick={() => onDelete(index)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Formcontainer>
      )}
    </>
  );
};

export default tableFilter;
