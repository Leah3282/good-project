import postData from '/Posts'
console.log("make another conflit")

const SortPosts=()=>{
    
    const sort=()=>{
        postData.sort((p)=>p._id)
    }
   
    return<>
        <button onClick={sort}>sort</button>
    </>
}