import axios from 'axios';
import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Button , Card , Badge , Spinner , Form} from 'react-bootstrap';
import { storeNewProject } from "../../../services/ProjectService";

class ProjectCreate extends React.Component {
    state = {
        isLoading: false,
        name: '',
        description: '',
        errors: {},
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitProject = async (e) => {
         e.preventDefault();
         const { history } = this.props;

         this.setState({
             isLoading: true
         })
         const data = {
             name: this.state.name,
             description: this.state.description,
             user_id: 1
         };
        const response = await storeNewProject(data);
        
        if (response.success) {
            this.setState({
              name: '',
              description: '',
              isLoading: false,
            });
            history.push('/project');
          } else {
            this.setState({
              errors: response.errors,
              isLoading: false,
            });
          }
    }
    render() {
        return ( 
            <> 
            <h2>Create new project</h2> 
            <Card>
                <Card.Body>
                <Form onSubmit={this.submitProject}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Project title</Form.Label>
                    <Form.Control type="text" placeholder="Enter project name" name="name" value={this.state.name} onChange={(e) => this.changeInput(e)}  />
                    <Form.Text className="text-muted">
                    This is your project name
                    </Form.Text>
                </Form.Group>
                {this.state.errors && this.state.errors.name && (
                <p className="text-danger">{this.state.errors.name[0]}</p>
                )}

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" name="description" value={this.state.description} onChange={(e) => this.changeInput(e)} />
                </Form.Group>
                {this.state.isLoading && (
                <Button variant="primary" type="button" disabled>
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>{" "}
                  Saving...
                </Button>
              )}

              {!this.state.isLoading && (
                <Button variant="primary" type="submit">
                  Save Project
                </Button>
              )}
            </Form>
                </Card.Body>
            </Card>
            </>
         );
        }
   
}
 
export default withRouter(ProjectCreate);
