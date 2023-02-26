import Table from 'react-bootstrap/Table';

function TableResult() {
  return (
<div className="row justify-content-center">
    <div className="col-md-7">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Serial No.</th>
          <th>Input Arrays</th>
          <th>Answer</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>[20, 10 ,10]</td>
          <td>42</td>
         
        </tr>
        <tr>
          <td>2</td>
          <td>[5,10]</td>
          <td>5</td>
      
        </tr>
        
      </tbody>
    </Table>
    </div>
</div>


  );
}

export default TableResult;