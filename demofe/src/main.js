import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
import "./style.css";

function buildTR(item) {
  return `<tr>
        <th scope="row">${item.id}</th>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>${item.image}</td>
        <td>${item.price}</td>
        <td>
          <button type="button" class="btn btn-outline-danger">Delete</button>
          <button type="button" class="btn btn-outline-warning">Edit</button>
        </td>
      </tr>`;
}

function buildData(data) {
  let str = "";
  console.log(data);
  data.forEach((element) => {
    str += buildTR(element);
  });

  return str;
}

async function main() {
  let respone = await axios.get("http://localhost:3000/api/products");
  let products = respone.data.data;
  // console.log(products.data);
  document.querySelector("#app").innerHTML = `
  <div class="container">
   <h1> Product Management </h1>
   <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">description</th>
        <th scope="col">Image</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      ${buildData(products)}
    </tbody>
  </table>
  </div>
`;
}

main();
