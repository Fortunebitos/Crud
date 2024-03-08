import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Button } from "bootstrap";
import "./Main.scss";

function Main() {
  return (
    <div className="main">
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add New Expenses
              </h1>
            </div>
            <div class="modal-body">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" id="cst" placeholder="Enter Category" />
              <br />
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                id="cst"
                placeholder="Enter Description"
              />
              <br />
              <Form.Group className="mb-3" controlId="formAccount">
                <Form.Label>Account</Form.Label>
                <Form.Select name="account">
                  <option value="cash">Cash</option>
                  <option value="debit">Debit</option>
                </Form.Select>
              </Form.Group>
              <Form.Label>Account</Form.Label>
              <Form.Control type="text" id="cst" placeholder="Enter Account" />

              <br />

              <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Transaction Date</Form.Label>
                <Form.Control type="date" name="date" />
              </Form.Group>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="update"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add New Expenses
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" id="cst" placeholder="Enter Category" />
              <br />
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                id="cst"
                placeholder="Enter Description"
              />
              <br />
              <Form.Group className="mb-3" controlId="formAccount">
                <Form.Label>Account</Form.Label>
                <Form.Select name="account">
                  <option value="cash">Cash</option>
                  <option value="debit">Debit</option>
                </Form.Select>
              </Form.Group>
              <Form.Label>Account</Form.Label>
              <Form.Control type="text" id="cst" placeholder="Enter Account" />

              <br />

              <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Transaction Date</Form.Label>
                <Form.Control type="date" name="date" />
              </Form.Group>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="delete"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Add New Expenses
            </h1>
          </div>
          <div class="modal-body">
<p>Are You Sure You Want To Delete</p>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
</div>
      <div className="su">
        <h1 className="exp">Expenses Transactions</h1>
        <button
          type="button"
          class="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          ADD NEW
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Account</th>
            <th>Amount</th>
            <th>Transaction Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BreakDown</td>
            <td>Salary</td>
            <td>Cash</td>
            <td>2000</td>
            <td>2024-01-04</td>
            <td>
              <button
              style={
{
  marginRight:'1rem'
}
              }
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#update"
              >
                Update
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#delete"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Main;
