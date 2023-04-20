const Person = (props) =>{
    return(
        <div className="flex flex-col w-[570px] text-lg font-semibold justify-center bg-green-200 h-[200px] mb-5">
               <p>Student ID : {props.studentID}</p> 
                <p>Name :{props.firstName}</p>
                <p>LastName : {props.lastName}</p>
        </div>
    );
}

export default Person