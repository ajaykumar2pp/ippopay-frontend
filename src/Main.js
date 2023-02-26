import axios from "axios";
import React, { useEffect, useState } from "react";
// import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { minimumDifference } from "./minimumDifference";
import './App.css';

import Table from 'react-bootstrap/Table';
const Main = () => {

    const [arrayValue, setArrayValue] = useState([]);

    const [intialValue, setIntialValue] = useState();

    const [data, setData] = useState();

    const [history, setHistory] = useState([]);

    const handleChange = (e) => {
        setIntialValue(e.target.value);
    };

    const handleArray = (e) => {
        e.preventDefault();
        setArrayValue((arrayValue) => [...arrayValue, intialValue]);
        setIntialValue(" ");
        e.target.reset();
    };
    // console.log(arrayValue);
    const handleValue = () => {
        let arr = arrayValue;
        let nums = arr.map(Number);
        setData(minimumDifference(nums));
        setIntialValue(null);
        setArrayValue([]);
        try {
            let values = nums;
            let answers = minimumDifference(values);
            const data1 = axios.post(
                "http://localhost:5000/store",
                { values, answers },
                { headers: { "Content-Type": "application/json" } }
            );
            console.log(data1)
            // console.log("====", data1);
        } catch (error) {
            console.error(error.data);
        }
    };

    useEffect(() => {
        axios
            .get("http://localhost:5000/all")
            .then((response) => setHistory(response.data));
    }, [data]);



    return (
        <div>
            {/* Heading  */}
            <div className="App">
                <h2>Ippo Pay Assignment Full Stack Developer</h2>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-danger text-center">Difference between the sums of the arrays </h3>
                </div>
            </div>

            {/******   Form Start  ********* */}
            <div className="row justify-content-center mb-4">
                <div className="col-md-4 ">
                    <form onSubmit={handleArray}>
                    <label for="staticEmail2" className=""> Value</label>
                    <input type="number" className="form-control" id="numbervalue" placeholder="Enter the Value" value={intialValue}onChange={handleChange} autofocus />
                    <div className="mt-2 justify-content-end">
                        <button type="submit" className="btn btn-outline-primary mb-3">Add</button>
                        {arrayValue.length > 0 ? (
                            <div className="__add-array">[{arrayValue.join(",")}]</div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                    </form>
                    {/* <Form.Label>Enter the  Value</Form.Label>
                    <InputGroup className="mb-4" onSubmit={handleArray}>

                        <Form.Control
                            placeholder="Enter the  Value"
                            aria-label="Enter the  Value"
                            type="number"
                            value={intialValue}
                            onChange={handleChange}
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-primary" id="button-addon2">
                            ADD
                        </Button>
                        {arrayValue.length > 0 ? (
                            <div className="__add-array">[{arrayValue.join(",")}]</div>
                        ) : (
                            <div></div>
                        )}
                    </InputGroup> */}
                </div>
            </div>
            {/******   Form End   ********* */}

            <div className="row justify-content-center">
                <div className="col-md-1">
                    <Button variant="btn btn-primary" id="button-addon2" onClick={handleValue}>
                        Submit
                    </Button>
                </div>
            </div>

            {/* ****  Submit Button End  ****** */}
            {data ? (
                <p className="text-center h3 ans">
                 Difference between the sums of the arrays is   {data}
                </p>
            ) : (
                <p></p>
            )}
            <hr />
            {/* VALUE = {data} */}
            <h2 className="text-center text-bg-danger">History</h2>


            {/* *******  History End ********** */}
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Input Arrays</th>
                                <th>Answer</th>

                            </tr>{" "}
                        </thead>

                        {history
                            .slice(0)
                            .reverse()
                            .map((item,i) => (
                                <tbody key={i}>
                                    <tr>
                                        <td>[{item.values.join(",")}]</td>
                                        <td>{item.answers}</td>
                                    </tr>
                                </tbody>
                            ))}

                    </Table>
                </div>
            </div>

            {/* ************   Table End  **************** */}
        </div>
    )
}

export default Main
