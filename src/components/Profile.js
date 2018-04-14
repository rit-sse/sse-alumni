import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <form>
            <table align='center'>
                <tbody>
                <tr id='odd'>
                    <td>
                        <label className='lead'>First Name : </label>
                    </td>
                    <td>
                        <input className='text' class='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='even'>
                    <td>
                        <label className='lead'>Last Name : </label>
                    </td>
                    <td>
                        <input type='text' className='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='odd'>
                    <td>
                        <label className='lead'>Company Name : </label>
                    </td>
                    <td>
                        <input type='text' className='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='even'>
                    <td>
                        <label className='lead'>Position : </label>
                    </td>
                    <td>
                        <input type='text' className='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='odd'>
                    <td>
                        <label className='lead'>Graduation Year : </label>
                    </td>
                    <td>
                        <input type='text' className='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='even'>
                    <td>
                        <label className='lead'>Contact Email : </label>
                    </td>
                    <td>
                        <input type='text' className='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='odd'>
                    <td>
                        <label className='lead'>Contact Phone Number : </label>
                    </td>
                    <td>
                        <input type='text' className='pull-right'></input><br/>
                    </td>
                </tr>
                <tr id='even'>
                    <td>
                        <label className='lead'>Major : </label>
                    </td>
                    <td>
                        <input type='text' className='pull-right'></input><br/>
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
