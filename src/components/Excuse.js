import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Excuse = () => {
    const [Excused, setExcused] = useState([]);
    const [Category, setCategory] = useState([]);
    const endpointDevJoke = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist&type=single"
    // const endpointOffice = "https://excuser.herokuapp.com/v1/excuse/office";
    // const endpointFamily = "https://excuser.herokuapp.com/v1/excuse/family";
    // const endpointChildren = "https://excuser.herokuapp.com/v1/excuse/children";
    // const endpointCollege = "https://excuser.herokuapp.com/v1/excuse/college";
    // const endpointParty = "https://excuser.herokuapp.com/v1/excuse/party";

    useEffect(() => {
        getDevJoke()
    },[])

    const getDevJoke = () => {
            axios.get(endpointDevJoke).then((result) => {
            console.log(result);
            let devjokeResult = result.data.joke
            let devjokeCategory = result.data.category
            console.log(devjokeResult);
            setExcused(devjokeResult);
            setCategory(devjokeCategory)
        })
        
    }
    // const getExcuseOffice = () => {
    //     axios.get(endpointOffice).then((result)=>{
    //         let officeResult = result.data[0].excuse;
    //         let officeCategory = result.data[0].category;
    //         setCategory(officeCategory);
    //         console.log(officeResult);         
    //         // console.log(result.data);
    //         setExcused(officeResult);
    //     })
    // }
    
    // const getExcuseFamily =() => {
    //     axios.get(endpointFamily).then((result)=>{
    //         let familyResult = result.data[0].excuse;
    //         let familyCategory = result.data[0].category;
    //         setCategory(familyCategory)
    //         console.log(familyResult);
    //         setExcused(familyResult);
    //     })
    // }

    // const getExcuseChildren =() => {
    //     axios.get(endpointChildren).then((result)=>{
    //         let childrenResult = result.data[0].excuse;
    //         let childrenCategory = result.data[0].category;
    //         setCategory(childrenCategory)
    //         console.log(childrenResult);
    //         setExcused(childrenResult)
    //     })
    // }

    // const getExcuseCollege =() => {
    //     axios.get(endpointCollege).then((result)=>{
    //         let collegeResult = result.data[0].excuse;
    //         let collegeCategory = result.data[0].category;
    //         setCategory(collegeCategory)
    //         console.log(collegeResult);
    //         setExcused(collegeResult)
    //     })
    // }

    // const getExcuseParty =() => {
    //     axios.get(endpointParty).then((result)=>{
    //         let partyResult = result.data[0].excuse;
    //         let partyCategory = result.data[0].category;
    //         setCategory(partyCategory)
    //         console.log(partyResult);
    //         setExcused(partyResult)
    //     })
    // }
  return (
    <>
    <marquee behavior="" direction="" className="text-dark fs-5 fw-bold">Excuse is the tool for the incompetent. Be stronger than your excuses</marquee>
    <div className="container-fluid mx-auto bg-info rounded shadow-lg col-lg-7">
        <h1 className="fs-3 text-dark text-center text-decoration-underline rounded">Get 'da Excuses in🤣</h1>
        <div className="p-3" id='btns'>
            <button className="btn btn-dark col-lg-5 p-2 mx-auto" onClick={getDevJoke}>Joke</button>
        </div>
    </div>

    {
            <>
            <div className="card mb-3 mt-5 mx-auto shadow w-50" id='crd'>
                <h3 className="card-header mt-2 text-light rounded shadow">{Category}</h3>
                <div className="card-body">
                    <p className="card-text fs-4 text-center shadow-sm" id='exc'>{Excused}</p>
                </div>
            </div>
            </>
    }
    </>
  )
}

export default Excuse