import React, {Component} from 'react';
import './DropDown.css';

class DynamicSelect extends Component{
    constructor(props){
        super(props)
    }

    //On the change event for the select box pass the selected value back to the parent
    handleChange = (event) =>
    {
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }

    render(){
        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map((data) =>
                <option 
                    key={data.id}
                    value={data.id}
                >
                    {data.name}
                </option>
            );
        
            return (
            <select name="customSearch" className="listbox-main-estados" onChange={this.handleChange}>
                <option>Selecione seu estado</option>
                {options}
           </select>
        )
    }
}

export default DynamicSelect;