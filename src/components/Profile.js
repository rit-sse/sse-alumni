import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <form>

            <table align='center'>
                <tbody>
                <tr id='odd'>
                    <td>
                        <label class='lead'>First Name : </label>
                    </td>
                    <td>
                        <input type='text' class='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='even'>
                    <td>
                        <label class='lead'>Last Name : </label>
                    </td>
                    <td>
                        <input type='text' class='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='odd'>
                    <td>
                        <label class='lead'>Company Name : </label>
                    </td>
                    <td>
                        <input type='text' class='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='even'>
                    <td>
                        <label class='lead'>Position : </label>
                    </td>
                    <td>
                        <input type='text' class='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='odd'>
                    <td>
                        <label class='lead'>Graduation Date : </label>
                    </td>
                    <td>
                        <input type='date' class='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='even'>
                    <td>
                        <label class='lead'>Contact Email : </label>
                    </td>
                    <td>
                        <input type='text' class='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='odd'>
                    <td>
                        <label class='lead'>Contact Phone Number : </label>
                    </td>
                    <td>
                        <input type='text' class='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='even'>
                    <td>
                        <label class='lead'>Major : </label>
                    </td>
                    <td>
                        <input type='text' class='pull-right'></input><br/>
                    </td>
                </tr>
                </tbody>
            </table>
            <br/>
            <input type='submit'></input>
        </form>
    );
  }
}

export default Login;
