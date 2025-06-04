import axios from "axios"

export const getJudge0LanguageId = (language) => {
     const languageMap = {
        "PYTHON":71,
        "JAVA":62,
        "JAVASCRIPT":63,
    }

    //if we want to make it support for more languages then we have to include that here first

    return languageMap[language.toUpperCase()]
}


//would hit the endpoint of judge0 (have to refer to judge0 docs in submission/create a batch section)
//when we hit the url first time it would give me token in an array
export const submitBatch = async (submissions)=>{
    const {data} = await axios.post(`${process.env.JUDGE0_API_URL}/submissions/batch?base64_encoded=false`,{
        submissions
    })


    console.log("Submission Results: ", data)

    return data // [{token} , {token} , {token}] token corresponding to the resp code in submission
}


const sleep  = (ms)=> new Promise((resolve)=> setTimeout(resolve , ms))


//to poll the endpoint whether our work is done or not
export const pollBatchResults = async (tokens)=>{
    while(true){
        
        const {data} = await axios.get(`${process.env.JUDGE0_API_URL}/submissions/batch`,{
            params:{
                tokens:tokens.join(","),
                base64_encoded:false,
            }
        })

        const results = data.submissions;

        const isAllDone = results.every(
            (r)=> r.status.id !== 1 && r.status.id !== 2
        )

        if(isAllDone) return results
        await sleep(1000)
    }
}

export function getLanguageName(languageId){
    const LANGUAGE_NAMES = {
        74: "TypeScript",
        63: "JavaScript",
        71: "Python",
        62: "Java",
    }

    return LANGUAGE_NAMES[languageId] || "Unknown"
} //can use judge0 to retrieve but for now hardcoded