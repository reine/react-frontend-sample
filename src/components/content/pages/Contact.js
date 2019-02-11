import React from 'react'



export default class Contact extends React.Component {
    render() {
        return <section>
            <h1>All Contacts Page</h1>
            <div>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Source</th>
                        <th>Date Added</th>
                        <th>&nbsp;</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dave Ramos</td>
                            <td>dave@virtual-wonders.com</td>
                            <td>Prospect</td>
                            <td>Mini Office</td>
                            <td>Jan 32, 1970</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    }
}