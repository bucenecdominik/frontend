import React, { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      todoList: []
      };
  }

    async componentDidMount() {
      try {
        const res = await fetch('http://localhost:8000/api/report/list/');
        const todoList = await res.json();
        this.setState({
          todoList
        });
      } catch (e) {
        console.log(e);
    }
    }
    renderItems = () => {
      const newItems = this.state.todoList.filter(item => 1 == 1)
      return newItems.map(item => (
        <tr key = {item.id}>
          <td key = {item.id}>
            {item.id}
          </td>
          <td key = {item.id}>
          {item.minutes_spent/60}
          </td>
          <td key = {item.id}>
          {item.note}
          </td>
          <td key = {item.id}>
          {item.task.name}
          </td>
        </tr>
      ));
    };

    render() {
      return (
        <main className="content">
        <h1>Tabulka</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <table>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Pocet hodin</td>
                    <td>Note</td>
                    <td>Nazev tasku</td>
                  </tr>
                </thead>
                <tbody>
                {this.renderItems()}
                </tbody>
                </table>
            </div>
          </div>
        </div>
      </main>
      )
    }
  }
  
export default App;