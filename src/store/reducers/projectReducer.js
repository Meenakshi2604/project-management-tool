const initState = {
    projects: [
        {id: '1', title: 'Trial 1', content: 'blah blah blah'},
        {id: '2', title: 'Trial 2', content: 'blah blah blah'},
        {id: '3', title: 'Trial 3', content: 'blah blah blah'},    
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('project created', action.project);
            break;
        default: 
        console.log('default')
    }
    return state;
}

export default projectReducer;