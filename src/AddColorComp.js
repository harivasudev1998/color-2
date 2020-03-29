import React from 'react';
import DisplayColorComp from './DisplayColorComp'


class AddColorComp extends React.Component {
    

    constructor(props){
        super(props)
        
        this.ChangeName = this.ChangeName.bind(this);
        this.ChangeColor = this.ChangeColor.bind(this);
        // this.setFavColor = this.setFavColor.bind(this);
        this.submitForm = this.submitForm.bind(this);
        
        this.state={

            scolor:'',
            sname:'',
            submit:0,
            colorarray: []
        }
        
    }

    // setFavColor=function(eventObject){
    //     console.log(eventObject);

    //     this.setState({submit:1})
    //     // console.log(eventObject.target);
    //     // console.log(eventObject.target.value);

    //     // this.setState({scolor:eventObject.target.value})

    // }

    submitForm = () => {

        this.setState({ submit: 1 })
        
        var colorJson = {
            "name": this.state.sname,
            "code": this.state.scolor
        }
        this.state.colorarray.push(colorJson);
    }

    ChangeName=function(e){
        console.log(e);
        console.log(e.target.value);
        this.setState({
            sname: e.target.value
        });
        // console.log(this.state.scolor);
        
    }

    ChangeColor=function(e1){
        console.log(e1)
        console.log(e1.target.value)
        this.setState({ scolor: e1.target.value });
        console.log(e1.target.value )
    }

    render() { 
        const disp= this.state.submit;
        let display;
        
      
        if (disp === 1) {
            display = this.state.colorarray.map((colors) => {
                return <DisplayColorComp name={colors.name} code={colors.code} />
            })
            
        } else {
            display = <DisplayColorComp />
        }
        return ( 
            <div>
                <table border="1 solid">
                    <thead>
                <tr>
                
                    
                        <td>Color Name</td>
                        <td><input type="text" name="sname" value={this.state.sname} onChange={this.ChangeName}></input></td>
                
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Color Select</td>
                    <td><input type="color" name="scolor" value={this.state.scolor} onChange={this.ChangeColor}></input></td>
                </tr>

<tr></tr>
                <tr>
                    <td></td>
                 <td><button onClick={this.submitForm}>Add</button></td>   
                </tr>
                
                </tbody>

                </table>

                <hr />
            <table border="1 solid">
                <thead>
                    <tr>
                        <th>Color Name</th>
                        <th>Color Code</th>
                    </tr>
                </thead>
                <tbody>
                    {display}
                </tbody>
            </table>
                
            </div>
         );

         
        
    }
}
 
export default AddColorComp;