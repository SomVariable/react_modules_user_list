const defineProcess = (processes) => {
    for(let process in processes){
        if(processes[process]){
            return process
        }
    }
}

export default defineProcess