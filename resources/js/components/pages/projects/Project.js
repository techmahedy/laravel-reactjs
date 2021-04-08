import axios from 'axios';
import React from 'react';
import { Button , Card , Badge , Spinner} from 'react-bootstrap';

class Project extends React.Component {
    state = {
       projectList: [],
       isLoading: false
    }
    componentDidMount() {
       this.getProject();
    }
    getProject = () => {
        this.setState({ isLoading:true });
        axios.get('/api/projects')
            .then((response)=>{
               const projectList = response.data.data;
               this.setState({
                    projectList,
                    isLoading:false
                })
            })
    }
    render(){
        return (  
            <>  
            <h2>Project List  <Badge variant="secondary"> {this.state.projectList.length}</Badge></h2>
            { this.state.isLoading && 
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            }
            {
                this.state.projectList.map((project,index)=> (
                <Card className="mt-2" key={index}>
                    <Card.Header> {project.name} <Badge variant="secondary"> {project.tasks_count}</Badge></Card.Header>
                    <Card.Body>
                        <Card.Text>
                        {project.description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                ))
            }
            </>
        );
    }
}
 
export default Project;