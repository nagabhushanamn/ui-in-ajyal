import React, { Component } from 'react';

class ItemList extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        fetch("http://192.168.1.113:8080/api/items")
            .then(response => response.json())
            .then(items => {
                this.setState({ items })
            })
    }
    renderItems() {
        let { items } = this.state;
        return items.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>
                        <img style={{width:'15px',height:'15px'}} className="img-fluid" src={'no-image.png'} alt="" />
                    </td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>{item.canBuy ? 'Available' : 'Not Available'}</td>
                    <td><a href="#"><i className="fa fa-edit"></i></a></td>
                    <td><a href="#"><i className="fa fa-trash"></i></a></td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <table className="table table-bordered table-sm table-striped">
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ItemList;