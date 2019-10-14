import React, { Component } from 'react';

class ItemList extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        fetch("http://localhost:8080/api/items")
            .then(response => response.json())
            .then(items => {
                this.setState({ items })
            })
    }
    deleteItem(e, itemId) {
        e.preventDefault();
        let b = window.confirm("Are you sure ?")
        if (b)
            fetch(`http://localhost:8080/api/items/${itemId}`, { method: 'DELETE' })
                .then(response => response.json())
                .then(r => {
                    let { items } = this.state;
                    items = items.filter(item => item.id !== itemId)
                    this.setState({ items })
                })
    }
    editItem(e, itemId) {
        e.preventDefault();
        this.props.history.push('edit/' + itemId)
    }
    renderItems() {
        let { items } = this.state;
        return items.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>{item.canBuy ? 'Available' : 'Not Available'}</td>
                    <td><a href="/" onClick={e => this.editItem(e, item.id)}><i className="fa fa-edit"></i></a></td>
                    <td><a href="/" onClick={e => this.deleteItem(e, item.id)}><i className="fa fa-trash"></i></a></td>
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